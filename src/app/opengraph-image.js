import { ImageResponse } from "next/og";
import { BRAND_MARK, SITE_NAME } from "../lib/brand";

export const runtime = "edge";
export const alt = "Mitos de Colombia – Archivo editorial de mitos colombianos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1f1a 0%, #132e25 40%, #1a3d33 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 104,
              height: 104,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(232, 240, 233, 0.5)",
              borderRadius: 12,
              fontSize: 76,
              fontWeight: 400,
              lineHeight: 1,
              color: "#e8f0e9",
              marginBottom: 8,
            }}
          >
            {BRAND_MARK}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: "#e8f0e9",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#8bb89a",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            Archivo editorial
          </div>
          <div
            style={{
              width: 80,
              height: 3,
              background: "#4a9d6e",
              borderRadius: 2,
              marginTop: "16px",
            }}
          />
          <div
            style={{
              fontSize: 20,
              color: "#6b9e7d",
              maxWidth: 600,
              textAlign: "center",
              marginTop: "12px",
              lineHeight: 1.5,
            }}
          >
            Tradicion oral colombiana organizada por region, origen y tema
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
