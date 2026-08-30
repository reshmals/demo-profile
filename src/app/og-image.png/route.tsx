import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/resume-data";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          backgroundImage: "radial-gradient(circle at 25px 25px, #1e2c4f 2%, transparent 0%), radial-gradient(circle at 75px 75px, #111c38 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "60px 80px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          border: "8px solid #1e2c4f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#00d4ff",
              boxShadow: "0 0 20px #00d4ff",
            }}
          />
          <span style={{ fontSize: 24, fontWeight: "bold", letterSpacing: "2px", color: "#00d4ff" }}>
            DIGITAL PROFILE // AI RESUME
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: 64, fontWeight: 900, margin: 0, color: "#ffffff" }}>
            {personalInfo.name}
          </h1>
          <p style={{ fontSize: 32, fontWeight: 600, margin: 0, color: "#818cf8" }}>
            {personalInfo.title}
          </p>
          <p style={{ fontSize: 22, color: "#94a3b8", maxWidth: 900, lineHeight: 1.4 }}>
            10+ Years Experience • MuleSoft Certified Integration Architect (MCIA) • Runtime Fabric (RTF) • Dell Boomi • Workato
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            borderTop: "1px solid #1e2c4f",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px", fontSize: 20, color: "#00d4ff" }}>
            <span>⚡ Publicis Sapient</span>
            <span>🏆 MCIA Certified</span>
            <span>🏛️ VJTI Mumbai</span>
          </div>
          <span style={{ fontSize: 18, color: "#64748b" }}>
            Built by IntelliForge AI
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
