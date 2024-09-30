import type { Metadata } from "next"

import "./globals.css"

import StoreProvider from "@/app/StoreProvider"

export const metadata: Metadata = {
  title: "placeholder - TODO",
  description: "Organization and user management, time-keeping, invoicing and more for event staff management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`font-sans antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
