import type { Metadata } from "next"
import { Roboto_Flex } from 'next/font/google'

import "./globals.css"

import StoreProvider from "@/app/StoreProvider"

const Roboto = Roboto_Flex({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  
})

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
        <body className={`${Roboto.className} antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
