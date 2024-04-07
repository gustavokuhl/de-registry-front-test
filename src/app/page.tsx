"use client"

import ContractWizzard from "@/components/contract/wizzard"
import { ethClient, wallets } from "@/utils/wallet/client"
import { ConnectEmbed, useActiveWallet } from "thirdweb/react"

export default function Home() {
  const wallet = useActiveWallet()

  return (
    <main className="flex flex-col gap-12 p-12 m-auto justify-center items-center h-full w-full">
      {wallet ? (
        <ContractWizzard />
      ) : (
        <ConnectEmbed
          client={ethClient}
          wallets={wallets}
          showThirdwebBranding={false}
        />
      )}

      {/* <Deploy /> */}
    </main>
  )
}
