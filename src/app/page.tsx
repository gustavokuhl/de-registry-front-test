"use client"

import ContractWizzard from "@/components/contract/wizzard"
import Deploy from "@/components/deploy"

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-12 max-w-4xl m-auto">
      <ContractWizzard />
      <Deploy />
    </main>
  )
}
