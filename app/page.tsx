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
        <div className={`${isDarkMode && "dark"} flex flex-col justify-start w-full min-h-screen m-0 bg-zinc-200 dark:bg-gray-700`}>
            <HorizontalNavbar />
            <div className="flex-grow">
                {/* landing page content */}
            </div>
            <Footer />
        </div>
    )
}
