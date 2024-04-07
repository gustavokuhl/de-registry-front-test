"use client"

import { ethClient, wallets } from "@/utils/wallet/client"
import { ConnectButton, useActiveWallet } from "thirdweb/react"

function Navbar() {
  const wallet = useActiveWallet()

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">SS-TM</a>
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
