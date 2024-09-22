"use client"

import React, { useContext } from "react"

import Footer from "@/components/Footer"
import HorizontalNavbar from "@/components/HorizontalNavbar"
import { selectDarkMode } from "@/lib/features/darkMode/darkMode"
import { useAppSelector } from "@/lib/hooks"

export default function Home() {
  const isDarkMode = useAppSelector(selectDarkMode)
  console.log(isDarkMode)

  return (
    <div className="flex flex-col w-full min-h-screen pb-20 m-0 font-[family-name:var(--font-geist-sans)]">
      <HorizontalNavbar />
      <main className="flex-initial flex w-full flex-col gap-8">
      </main>
      <Footer />
    </div>
  )
}
