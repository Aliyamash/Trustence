import { ImageResponse } from "next/og";

export const alt = "Trustence — Boutique digital studio for web, software and automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "linear-gradient(135deg, #060e09 0%, #114422 58%, #658672 100%)",
          color: "#fff8ee",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 8, textTransform: "uppercase" }}>Trustence</div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 70, lineHeight: 1.08, fontWeight: 700 }}>Bespoke digital systems, built with intent.</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#d3dcd6" }}>Strategy · Web · Software · Automation · Growth</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#cba792" }}>trust-ence.com</div>
      </div>
    ),
    size
  );
}
