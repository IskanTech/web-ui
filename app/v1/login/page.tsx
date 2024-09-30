"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [oauthProviderNames, setOauthProviderNames] = useState<string[]>([])

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
      <div className="w-1/2 h-screen text-3xl font-bold p-8 bg-blue-200 flex justify-center items-center">
        <div className="m-auto font-sans p-6 rounded-md min-w-96 w-40 bg-blue-100 flex flex-col shadow-md">
          <h1 className="text-blue-900 text-center w-full relative text-2xl uppercase">
            Login
            <hr className="h-1 w-full border-gray-700 border-solid border-t-2"></hr>
          </h1>
          {oauthProviderNames.map((name, ind) => (
              <OauthProviderButton key={ind} providerName={name} />
            ))}
        </div>          
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
    <button onClick={() => router.push(oauthRedirectUrl)}>
      {providerName}
    </button>
  )
}
