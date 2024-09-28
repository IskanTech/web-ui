"use client"

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page({ params }: {
    params: {
        provider: string,
    }
}) {
    const searchParams = useSearchParams()

    useEffect(() => {
       fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_ROUTE}/v1/login/callback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                Code: searchParams?.get("code"),
                ProviderID: params.provider,
                State: searchParams?.get("state"),
            }),
        })
            .then(res => res.json())
            .then(res => console.log(res.SessionID))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <p>Provider: { params.provider }</p>
            <p>State: { searchParams?.get("state") }</p>
            <p>Code: {searchParams?.get("code") }</p>
        </div>
    )
}