"use client"

import { useEffect, useState } from "react"
import Button from "./button"

function Deploy() {
  const [code, setCode] = useState("")

  async function clickButton() {
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

  useEffect(() => {
    async function updateCode() {
      const response = await fetch("/api/contracts", { method: "POST" })
      const json = await response.json()
      setCode(json.code)
    }
    updateCode()
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Test API</h1>
      <p>Verify your contract</p>
      <textarea
        className="min-h-64 bg-slate-200 rounded-lg p-4"
        readOnly
        value={code}
      />
      <Button className="" onClick={clickButton}>
        Deploy on Otavio API
      </Button>
    </div>
  )
}

export default Deploy
