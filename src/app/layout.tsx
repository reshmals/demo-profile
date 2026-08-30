import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/resume-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | Integration Architect & Senior Associate Technology L2`,
  description: `${personalInfo.name} - MuleSoft Certified Integration Architect (MCIA) with 10+ years of IT development experience across API-led connectivity, MuleSoft Runtime Fabric (RTF), Dell Boomi, and Workato.`,
  keywords: [
    "Reshma Sodanwar",
    "MuleSoft Certified Integration Architect",
    "MCIA",
    "MuleSoft 4",
    "Runtime Fabric",
    "RTF",
    "Anypoint Platform",
    "Dell Boomi",
    "Workato",
    "DataWeave 2.0",
    "API Architecture",
    "Publicis Sapient",
    "IntelliForge AI",
    "Digital Profile",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.linkedin }],
  creator: personalInfo.name,
  publisher: "IntelliForge AI",
  metadataBase: new URL("https://reshma-sodanwar-profile.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reshma-sodanwar-profile.vercel.app",
    siteName: `${personalInfo.name} - Digital Profile`,
    title: `${personalInfo.name} | Integration Architect & MuleSoft Lead`,
    description: personalInfo.summary,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Digital Profile`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Integration Architect`,
    description: personalInfo.summary,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    worksFor: {
      "@type": "Organization",
      name: "Publicis Sapient",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Veermata Jijabai Technological Institute (VJTI), Mumbai University",
    },
    sameAs: [personalInfo.linkedin, personalInfo.github],
    knowsAbout: [
      "MuleSoft 4",
      "API-Led Connectivity",
      "MuleSoft Runtime Fabric",
      "Dell Boomi",
      "Workato",
      "DataWeave",
      "Enterprise Integration",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-neural-bg text-slate-100 min-h-screen antialiased selection:bg-neural-cyan/30 selection:text-neural-cyan`}>
        {children}
      </body>
    </html>
  );
}
