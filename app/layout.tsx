import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alireza Menu",
  description: "Alireza Menu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
