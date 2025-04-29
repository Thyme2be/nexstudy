import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexStudy",
  description: "Create by Team ง้อ(ววว)(BD) developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
