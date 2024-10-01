"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [oauthProviderNames, setOauthProviderNames] = useState<string[]>([])

  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_ROUTE}/v1/login/providers`)
      .then(res => res.json())
      .then(res => setOauthProviderNames(res.providers))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container-xl flex flex-row w-full min-h-screen justify-between content-center bg-zinc-300">
      <div className="flex-initial w-1/2 h-screen bg-mainViolet">
        
      </div>
      <div className="w-1/2 h-screen text-3xl font-bold p-8 bg-blue-300 flex justify-center items-center">
        <form className="m-auto font-sans p-8 rounded-md min-w-96 w-40 bg-sky-50 flex flex-col shadow-xl text-slate-900">
          <h1 className="text-center w-full relative font-playwriteFont text-4xl">
            Login
          </h1>
          <div className="my-6">
            <label className="block text-sm font-bold mb-1" htmlFor="username">
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="human@company.com"
              value={username}
              onChange={e => {
                e.preventDefault()
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1" htmlFor="password">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-base mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="******************" 
              value={password}
              onChange={e => {
                e.preventDefault()
                setPassword(e.target.value)
              }}
            />
           {invalidCredentials && <p className="text-red-500 text-xs italic">Invalid username or password</p>}
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 min-w-32 focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>    
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 min-w-32 focus:outline-none focus:shadow-outline" type="button">
              Create Account
            </button>            
            {oauthProviderNames.map((name, ind) => (
              <OauthProviderButton key={ind} providerName={name} />
            ))}
          </div>
        </form>          
      </div>
    </div>
  )
}

interface OauthProviderButtonProps {
    providerName: string
}

function OauthProviderButton(props: OauthProviderButtonProps) {
  const { providerName} = props

  const [oauthRedirectUrl, setOauthRedirectUrl] = useState<string>()

  const router = useRouter()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_ROUTE}/v1/login/authurl?provider=${providerName}`)
      .then(res => res.json())
      .then(res => setOauthRedirectUrl(res.url))
      .catch(err => console.log(err))
  }, [])

  if (oauthRedirectUrl === undefined || oauthRedirectUrl === "") {
    return
  }

  return (
    <button className="my-2 text-white text-lg font-bold" onClick={() => router.push(oauthRedirectUrl)}>
      {providerName}
    </button>
  )
}
