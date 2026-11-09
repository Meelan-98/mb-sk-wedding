import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meelan-98.github.io/mb-sk-wedding/"),
  title: "Shehani & Meelan",
  description: "Join us on 2026.11.11",
  openGraph: {
    title: "Shehani & Meelan",
    description: "Join us on 2026.11.11",
    url: "./",
    siteName: "Shehani & Meelan Wedding",
    images: [
      {
        url: "photos/og-v2.webp",
        width: 1200,
        height: 630,
        alt: "Shehani & Meelan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shehani & Meelan",
    description: "Join us on 2026.11.11",
    images: ["photos/og-v2.webp"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#a07c34",
                colorText: "#3b3326",
                colorBgBase: "#ffffff",
                borderRadius: 2,
                fontFamily: "var(--font-body), sans-serif",
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
