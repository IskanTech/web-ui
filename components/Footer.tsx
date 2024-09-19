import React from 'react'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-mainViolet shadow-lg shadow-top dark:bg-gray-800">
        <div className="w-full max-w-screen-xl m-auto p-4 md:flex md:items-center md:justify-between text-white">
            <h1>Logo Placeholder</h1>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
