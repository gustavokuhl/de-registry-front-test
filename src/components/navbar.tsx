"use client"

import { ethClient, wallets } from "@/utils/wallet/client"
import Link from "next/link"
import { ConnectButton, useActiveWallet } from "thirdweb/react"

function Navbar() {
  const wallet = useActiveWallet()

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          SS-TM
        </Link>
      </div>
      <div className="navbar-end">
        {wallet ? (
          <ConnectButton
            client={ethClient}
            connectButton={{ label: "Conectar" }}
            wallets={wallets}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
