import React from 'react'
import Image from "next/image"
import logoImage from "@/public/logo/logoipsum-299.svg"

import DarkModeToggleSwitch from '@/components/DarkModeToggleSwitch'

export default function HorizontalNavbar() {
  return (
    <nav className="bg-mainViolet dark:bg-gray-800 w-full py-3 px-20 m-0 text-white font-[family-name:var(--font-geist-sans)]">
        <div className="w-full max-w-screen-xl flex flex-row m-auto items-center justify-between">
            <div className="flex-auto">
                <Image
                    className="bg-white"
                    src={logoImage}
                    alt="placeholder logo image"
                    width={30}
                    height={30}
                />  
            </div>
            <div className="flex-auto flex flex-row justify-end content-center font-medium">
                <div className="flex-intial">
                    <DarkModeToggleSwitch />
                </div>
            </div>
        </div>
    </nav>
  )
}
