'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance ONLY the first time this renders on the client-side
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}