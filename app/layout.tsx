import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interior Design Generator | AI-Powered Floor Plan to Design",
  description: "Transform your floor plan into stunning interior designs with AI. Upload a floor plan and get photorealistic interior renders instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

