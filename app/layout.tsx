import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Employee Portal | Edulife IT Institute",
  description:
    "Manage your work efficiently with Edulife Employee Portal. Submit attendance, track payments, and view your profile with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
