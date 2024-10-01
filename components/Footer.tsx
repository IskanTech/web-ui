import React from 'react'
import Image from "next/image"
import logoImage from "@/public/logo/logoipsum-299.svg"


export default function Footer() {
  return (
    <footer className="self-end w-full bg-mainViolet shadow-lg shadow-top dark:bg-gray-800">
        <div className="w-full max-w-screen-xl m-auto py-6 px-4 md:flex md:items-center md:justify-between text-white">
            <Image
                className="bg-white"
                src={logoImage}
                alt="placeholder logo image"
                width={30}
                height={30}
            />  
            <ul className="flex flex-wrap items-center mt-3 text-base font-bold sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-5 md:me-6">Jump To Top</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-5 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-5 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
