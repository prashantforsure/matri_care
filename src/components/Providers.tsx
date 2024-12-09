'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode
}
const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    
      <SessionProvider>
         {children}
      </SessionProvider>
   
  )
}

export default Providers