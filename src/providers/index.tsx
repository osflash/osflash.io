'use client'

import { Analytics } from '@vercel/analytics/react'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <>{children}</>

      <Analytics />
    </>
  )
}
