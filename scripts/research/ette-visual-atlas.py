"""Reference document assembly; photographs are not edited or regenerated."""
import json
import textwrap
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.lib.utils import simpleSplit

root = Path('output/references/chimila/visual-01').resolve()
web = json.loads((root / 'web-images.v1.json').read_text())['records']
pdf = json.loads((root / 'pdf-images.v1.json').read_text())['records']
reviewed_file = Path('content/videos/chimila/visual-01/references.v1.json')
if reviewed_file.exists():
    refs = json.loads(reviewed_file.read_text())['references']
    refs = [r for r in refs if r.get('selection') == 'reference_selected']
    output = Path('output/pdf/ette-ennaka-atlas-visual-01.pdf')
else:
    refs = [r for r in web if r.get('status') == 'downloaded'] + pdf
    output = Path('output/pdf/ette-ennaka-revision-referencias-01.pdf')
output.parent.mkdir(parents=True, exist_ok=True)
W, H = A4
c = canvas.Canvas(str(output), pagesize=A4)
c.setTitle('Ette Ennaka - Atlas de referencias visuales')
c.setAuthor('Archivo de investigación Mitos de Colombia')
groups = {}
for r in refs:
    groups.setdefault(r.get('category') or r['source_id'], []).append(r)
page_no = 0
if reviewed_file.exists():
    page_no += 1
    c.setFont('Helvetica-Bold', 23)
    c.drawString(32, H-68, 'Ette Ennaka')
    c.setFont('Helvetica', 16)
    c.drawString(32, H-94, 'Atlas de investigación visual / 01')
    c.setFont('Helvetica', 10)
    lines = [
        '12 de septiembre de 2026 / comunidad registrada como Chimila, ID 29',
        f'{len(refs)} referencias seleccionadas de 125 imágenes y láminas obtenidas.',
        '17 documentos y páginas consultados. No son 17 corroboraciones por mito.',
        'Cada referencia conserva su imagen original, procedencia y huella SHA-256.',
        '',
        'LECTURA DEL ATLAS',
        'Las fotografías actuales muestran personas y espacios contemporáneos.',
        'El archivo de 1946 documenta otro momento: no es una foto prehispánica.',
        'Las ilustraciones técnicas de hamaca son modelos académicos atribuidos.',
        'La fauna de Tayrona y Tolima se usa sólo para estudiar anatomía animal.',
        'No confirma una especie exacta ni una localización dentro de un relato.',
        '',
        'PRIMERAS DECISIONES',
        'Separar territorio, vestuario y vivienda por lugar y época.',
        'Estudiar algodón, husos, mochilas, redes y madera como materiales concretos.',
        'No inventar un traje uniforme, una casa universal ni un repertorio de glifos.',
        'Las personas retratadas no son modelos de identidad para personajes ficticios.',
        '',
        'LÍMITES Y DERECHOS',
        'Archivo interno de investigación: no autoriza republicación o generación.',
        'No se divulgaron coordenadas sensibles ni se reconstruyeron ceremonias.',
        'Ocho candidatos quedan sólo como contexto y cuatro se omiten del diseño.',
        'Biblia, trípticos y keyframes Ette siguen sin iniciar. No hubo llamadas pagadas.',
        '',
        'COMPLEMENTOS',
        'DOSSIER-VISUAL.md: hallazgos, diferencias, simbolismo y vacíos abiertos.',
        'references.v1.json: archivo, dimensiones, fuente, fecha, crédito y límites.',
        'sources.v1.json: bibliografía y condiciones de cada fuente.',
        '',
        'Los pies de imagen y las fichas de bibliografía son enlaces a las fuentes.',
    ]
    y = H-138
    for line in lines:
        for chunk in simpleSplit(line, 'Helvetica', 10, W-64) or ['']:
            c.drawString(32, y, chunk)
            y -= 19
    c.setFont('Helvetica', 7)
    c.drawRightString(W-32, 27, str(page_no))
    c.showPage()
for group, entries in groups.items():
    per_page = 4 if group == 'V11' or group == 'archivo_historico' else 8
    rows = per_page // 2
    cell_w = (W - 64) / 2
    cell_h = (H - 112) / rows
    for start in range(0, len(entries), per_page):
        page_no += 1
        c.setFillColorRGB(0, 0, 0)
        c.setFont('Helvetica-Bold', 16)
        c.drawString(32, H-36, 'Ette Ennaka - Referencias visuales')
        c.setFont('Helvetica', 9)
        c.drawString(32, H-53, group.replace('_', ' ') + ' / originales con procedencia; uso de investigación')
        for slot, r in enumerate(entries[start:start+per_page]):
            col, row = slot % 2, slot // 2
            x, y = 32 + col*cell_w, H - 72 - (row+1)*cell_h
            img_w, img_h = cell_w-14, cell_h-44
            reader = ImageReader(r['file'])
            iw, ih = reader.getSize()
            scale = min(img_w/iw, img_h/ih)
            dw, dh = iw*scale, ih*scale
            c.drawImage(reader, x+(img_w-dw)/2, y+42+(img_h-dh)/2, width=dw, height=dh)
            c.setFont('Helvetica-Bold', 8)
            c.drawString(x, y+29, r['id'])
            c.setFont('Helvetica', 7)
            label = r.get('subject') or r.get('source_alt') or 'Lámina de la fuente; ver original y contexto'
            c.drawString(x, y+18, label[:62])
            c.drawString(x, y+7, r['source_id'] + ' / ' + (('p. ' + str(r['source_page'])) if r.get('source_page') else r.get('publisher',''))[:62])
            c.linkURL(r['source_url'], (x,y,x+img_w,y+cell_h), relative=0, thickness=0)
        c.setFont('Helvetica', 7)
        c.drawString(32, 27, 'No es autorización de republicación ni certificación cultural. Créditos y límites: registro JSON y dossier.')
        c.drawRightString(W-32, 27, str(page_no))
        c.showPage()
if reviewed_file.exists():
    sources = json.loads(Path('content/videos/chimila/visual-01/sources.v1.json').read_text())['sources']
    for start in range(0, len(sources), 5):
        page_no += 1
        c.setFont('Helvetica-Bold', 17)
        c.drawString(32, H-39, 'Bibliografía, créditos y condiciones')
        y = H-68
        for s in sources[start:start+5]:
            c.setFont('Helvetica-Bold', 9)
            for line in simpleSplit(s['id'] + ' / ' + s['title'], 'Helvetica-Bold', 9, W-64):
                c.drawString(32, y, line)
                y -= 12
            c.setFont('Helvetica', 8)
            for value in [s['publisher'], s['period'], s['rights'], s['url']]:
                wrapped = '\n'.join(textwrap.wrap(value, 90)) if value.startswith('http') else value
                for line in sum([simpleSplit(v, 'Helvetica', 8, W-64) for v in wrapped.splitlines()], []):
                    c.drawString(32, y, line)
                    y -= 11
            credits = sorted(set(r['credit'] for r in refs if r['source_id'] == s['id']))
            if credits:
                for line in simpleSplit('Créditos registrados: ' + '; '.join(credits), 'Helvetica', 8, W-64):
                    c.drawString(32, y, line)
                    y -= 11
            c.linkURL(s['url'], (32, y, W-32, y+40), relative=0, thickness=0)
            y -= 19
        c.setFont('Helvetica', 7)
        c.drawString(32, 27, 'Permisos editoriales y culturales no resueltos. Consulte el original antes de reutilizar una imagen.')
        c.drawRightString(W-32, 27, str(page_no))
        c.showPage()
c.save()
print(json.dumps({'file':str(output.resolve()),'references':len(refs),'pages':page_no}))
