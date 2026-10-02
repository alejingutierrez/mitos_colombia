// Renderizador de texto con CoreText para los sobreimpresos del video.
//
// Por qué existe: el libvips que trae sharp en macOS usa Pango con el backend
// CoreText únicamente (no hay fontconfig), así que `fontfile` se ignora y toda
// fuente no instalada en el sistema cae a Helvetica EN SILENCIO. Aquí la fuente
// se carga POR ARCHIVO (CTFontManagerRegisterFontsForURL + descriptor del propio
// archivo): no hay búsqueda por nombre y por tanto no hay fallback posible.
//
// Uso:
//   render-text --text "La aparición del hombre" --font content/videos/fonts/Asimovian-Regular.ttf \
//     --size 104 --width 900 --tracking -0.03 --lineheight 0.96 --color "#F5F0E6" --out title.png
//   render-text --text "MITOS DE COLOMBIA · MUISCAS" --system "HelveticaNeue-Medium" --size 30 --tracking 0.2 ...
// Imprime en stdout un JSON con la familia y el nombre PostScript REALES usados,
// y el tamaño del PNG (RGBA, fondo transparente, texto centrado en `width`).
import Foundation
import CoreText
import CoreGraphics
import ImageIO

func arg(_ name: String) -> String? {
  let a = CommandLine.arguments
  if let i = a.firstIndex(of: name), i + 1 < a.count { return a[i + 1] }
  return nil
}
func fail(_ msg: String, _ code: Int32) -> Never { FileHandle.standardError.write((msg + "\n").data(using: .utf8)!); exit(code) }

guard let text = arg("--text"), let out = arg("--out") else { fail("uso: --text T --out PNG (--font ARCHIVO | --system NOMBRE) [--size 96 --width 900 --tracking 0 --lineheight 1 --color #F5F0E6]", 2) }
let size = CGFloat(Double(arg("--size") ?? "96") ?? 96)
let width = CGFloat(Double(arg("--width") ?? "900") ?? 900)
let trackingEm = CGFloat(Double(arg("--tracking") ?? "0") ?? 0)
let lineHeight = CGFloat(Double(arg("--lineheight") ?? "1.0") ?? 1.0)
let colorHex = (arg("--color") ?? "#F5F0E6").replacingOccurrences(of: "#", with: "")

var font: CTFont
if let path = arg("--font") {
  let url = URL(fileURLWithPath: path) as CFURL
  var err: Unmanaged<CFError>?
  _ = CTFontManagerRegisterFontsForURL(url, .process, &err) // si ya estaba registrada, el descriptor sigue saliendo del archivo
  guard let descs = CTFontManagerCreateFontDescriptorsFromURL(url) as? [CTFontDescriptor], let d = descs.first else { fail("no pude leer la fuente: \(path)", 3) }
  font = CTFontCreateWithFontDescriptor(d, size, nil)
} else if let name = arg("--system") {
  font = CTFontCreateWithName(name as CFString, size, nil)
} else { fail("hace falta --font ARCHIVO o --system NOMBRE", 2) }

func channel(_ s: Substring) -> CGFloat { CGFloat(Int(s, radix: 16) ?? 255) / 255.0 }
let r = channel(colorHex.prefix(2)), g = channel(colorHex.dropFirst(2).prefix(2)), b = channel(colorHex.dropFirst(4).prefix(2))
let space = CGColorSpace(name: CGColorSpace.sRGB)!
let color = CGColor(colorSpace: space, components: [r, g, b, 1])!

var alignment = CTTextAlignment.center
var lhm = lineHeight
let settings: [CTParagraphStyleSetting] = [
  withUnsafeMutablePointer(to: &alignment) { CTParagraphStyleSetting(spec: .alignment, valueSize: MemoryLayout<CTTextAlignment>.size, value: $0) },
  withUnsafeMutablePointer(to: &lhm) { CTParagraphStyleSetting(spec: .lineHeightMultiple, valueSize: MemoryLayout<CGFloat>.size, value: $0) },
]
let pstyle = CTParagraphStyleCreate(settings, settings.count)
let attrs: [CFString: Any] = [
  kCTFontAttributeName: font,
  kCTForegroundColorAttributeName: color,
  kCTKernAttributeName: trackingEm * size,
  kCTParagraphStyleAttributeName: pstyle,
]
let attributed = CFAttributedStringCreate(nil, text as CFString, attrs as CFDictionary)!
let framesetter = CTFramesetterCreateWithAttributedString(attributed)
var fit = CFRange(location: 0, length: 0)
let suggested = CTFramesetterSuggestFrameSizeWithConstraints(framesetter, CFRange(location: 0, length: 0), nil, CGSize(width: width, height: 100000), &fit)
let pad = ceil(size * 0.25)
let height = Int(ceil(suggested.height + pad * 2))
let W = Int(width)

guard let ctx = CGContext(data: nil, width: W, height: height, bitsPerComponent: 8, bytesPerRow: 0, space: space, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else { fail("no pude crear el contexto", 4) }
ctx.setAllowsAntialiasing(true)
ctx.setShouldSmoothFonts(true)
let path = CGPath(rect: CGRect(x: 0, y: pad, width: width, height: CGFloat(height) - pad * 2 + 1), transform: nil)
let frame = CTFramesetterCreateFrame(framesetter, CFRange(location: 0, length: 0), path, nil)
CTFrameDraw(frame, ctx)
guard let image = ctx.makeImage() else { fail("no pude rasterizar", 5) }
guard let dest = CGImageDestinationCreateWithURL(URL(fileURLWithPath: out) as CFURL, "public.png" as CFString, 1, nil) else { fail("no pude escribir \(out)", 6) }
CGImageDestinationAddImage(dest, image, nil)
guard CGImageDestinationFinalize(dest) else { fail("no pude finalizar \(out)", 6) }

let family = CTFontCopyFamilyName(font) as String
let ps = CTFontCopyPostScriptName(font) as String
print("{\"family\":\"\(family)\",\"postscript\":\"\(ps)\",\"width\":\(W),\"height\":\(height),\"lines\":\(CFArrayGetCount(CTFrameGetLines(frame)))}")
