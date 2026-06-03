import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { HERO, SITE } from "@/lib/site";

export const alt = `${SITE.name} – Implantes dentales en Madrid`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = join(process.cwd(), "public", "images", "mag-logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #021a42 0%, #042b6f 55%, #021a42 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={200}
          height={112}
          style={{
            marginBottom: 40,
            filter: "brightness(0) invert(1)",
          }}
        />
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#5ec8f2",
            marginBottom: 16,
          }}
        >
          {HERO.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          <span>{HERO.titleBefore} </span>
          <span style={{ color: "#5ec8f2" }}>{HERO.titleHighlight}</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.4,
            opacity: 0.92,
            maxWidth: 820,
          }}
        >
          {SITE.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
