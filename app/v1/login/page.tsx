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
    <div className="text-3xl font-bold underline">
        Login Page
        {oauthProviderNames.map((name, ind) => (
            <OauthProviderButton key={ind} providerName={name} />
          ))}
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
