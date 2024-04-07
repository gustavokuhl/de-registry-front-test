"use client"
import { ThirdwebProvider } from "thirdweb/react"

import { defineChain } from "thirdweb"

const ScrollSepoliaTestnet = defineChain(534351)

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>
}

export default Providers
