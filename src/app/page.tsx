"use client"

import ContractWizzard from "@/components/contract/wizzard"

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-12 max-w-4xl m-auto justify-center items-center h-full">
      <ContractWizzard />
      {/* <Deploy /> */}
    </main>
  )
}
