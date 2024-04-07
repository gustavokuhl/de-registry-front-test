"use client"

import { createThirdwebClient } from "thirdweb"
import { embeddedWallet } from "thirdweb/wallets"

const ethClient = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
})

const wallets = [embeddedWallet()]

export { ethClient, wallets }
