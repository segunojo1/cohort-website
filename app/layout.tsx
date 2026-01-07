import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cohort",
  description: "The social layer for student life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
