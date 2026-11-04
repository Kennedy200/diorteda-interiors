import { ImageResponse } from "next/og";
import { site } from "@/config/site/site";

export const alt = `${site.name}, home decor in ${site.district}, ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The link preview for WhatsApp and social media: the name and its red full stop, on white.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: "#ffffff",
        color: "#1f1f1f",
      }}
    >
      <div style={{ display: "flex", fontSize: 168, fontWeight: 600, letterSpacing: "-0.05em" }}>
        {site.shortName}
        <span style={{ color: "#a51c30" }}>.</span>
      </div>
      <div style={{ display: "flex", fontSize: 44, marginTop: 12, color: "#57524f" }}>
        {`Home decor in ${site.district}, ${site.city}. Retail and wholesale.`}
      </div>
    </div>,
    size,
  );
}
