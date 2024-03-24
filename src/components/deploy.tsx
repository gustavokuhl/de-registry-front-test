"use client"

import { useState } from "react"
import Button from "./button"

function Deploy() {
  const [code, setCode] = useState("")

  async function deployCode() {
    const resDeploy = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ solidityCode: code }),
    })
    console.log(resDeploy)
    console.log(await resDeploy.json())
  }

  async function fetchContract() {
    const response = await fetch("/api/contracts", { method: "POST" })
    console.log(response)
    const json = await response.json()
    setCode(json.code)
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Test API</h1>
      <p>Verify your contract</p>
      <Button onClick={fetchContract}>Fetch Contract from IPFS</Button>
      <textarea
        className="min-h-64 bg-slate-200 rounded-lg p-4"
        readOnly
        value={code}
      />
      <Button disabled={code === ""} className="" onClick={deployCode}>
        Deploy on Otavio API
      </Button>
    </div>
  )
}

export default Deploy
