"use client"

import React, { useEffect } from "react"

import Footer from "@/components/Footer"
import HorizontalNavbar from "@/components/HorizontalNavbar"
import { selectDarkMode, setDarkMode, setLightMode } from "@/lib/features/darkMode/darkMode"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"

export default function Home() {
    const dispatch = useAppDispatch()
    const isDarkMode = useAppSelector(selectDarkMode)

    useEffect(() => {
        if (localStorage.getItem("darkMode") !== null) {
            dispatch(setDarkMode())
            return
        } 
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        if (mediaQuery.matches) {
            localStorage.setItem("darkMode", "true")
            dispatch(setDarkMode())
            return
        }
        dispatch(setLightMode())
    }, [])

    // Wait for client side preference to be loaded
    if (isDarkMode === undefined) {
        return null;
    }

    return (
        <div className={`${isDarkMode && "dark"} flex flex-col w-full min-h-screen pb-20 m-0 font-[family-name:var(--font-geist-sans)]`}>
            <HorizontalNavbar />
            <main className="flex-initial flex w-full flex-col gap-8">
            </main>
            <Footer />
        </div>
    )
}
