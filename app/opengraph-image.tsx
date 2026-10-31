import { ImageResponse } from "next/og"
import { SITE_TITLE } from "@/lib/site"

export const alt = SITE_TITLE
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Dark theme tokens (see `--rv-*` in app/globals.css). */
const COLORS = {
  bg: "#111729",
  border: "#2B3448",
  text: "#EEF1F7",
  muted: "#A3ACBF",
  accentFill: "#2F6BEA",
  onAccent: "#FFFFFF",
}

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
          padding: "72px 80px",
          background: COLORS.bg,
          color: COLORS.text,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 6,
              background: COLORS.accentFill,
              color: COLORS.onAccent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {"</>"}
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: 5 }}>REVOSSO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 20, color: COLORS.muted, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>
            Software company
          </div>
          <div style={{ fontSize: 62, fontWeight: 600, lineHeight: 1.08, letterSpacing: -2, maxWidth: 980 }}>
            A software company that builds for clients, and runs its own.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: 24,
            fontSize: 22,
            color: COLORS.muted,
          }}
        >
          <div style={{ display: "flex" }}>Revofin · RevoMaket · Rechajem · Revokonek</div>
          <div style={{ display: "flex" }}>revosso.com</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
