"use client"

import ContractList from "@/components/contract/list"
import { ethClient, wallets } from "@/utils/wallet/client"
import {
  ConnectEmbed,
  useActiveWallet,
  useActiveWalletConnectionStatus,
} from "thirdweb/react"

export default function Home() {
  const wallet = useActiveWallet()
  const status = useActiveWalletConnectionStatus()

  return (
    <main className="flex flex-col p-12 m-auto justify-center items-center h-full w-full">
      {wallet ? (
        <div className="w-full max-w-4xl gap-12 ">
          <ContractList />
        </div>
      ) : status === "disconnected" ? (
        <ConnectEmbed
          client={ethClient}
          wallets={wallets}
          showThirdwebBranding={false}
        />
      ) : (
        "Conectando..."
      )}
    </main>
  )
}
