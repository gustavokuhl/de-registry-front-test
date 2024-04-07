"use client"

import { ethClient } from "@/utils/wallet/client"
import { ConnectButton } from "thirdweb/react"

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">SS-TM</a>
      </div>
      <div className="navbar-end">
        <ConnectButton client={ethClient} />
      </div>
    </div>
  )
}

export default Navbar
