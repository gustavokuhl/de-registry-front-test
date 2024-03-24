"use client"

import { useEffect, useState } from "react"
import Button from "./button"

function Deploy() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState<any>()
  useEffect(() => {
    console.log("result")
    console.log(result)
  }, [result])

  async function fetchContract() {
    const response = await fetch("/api/contracts", { method: "POST" })
    console.log(response)
    const json = await response.json()
    setCode(json.code)
  }

  async function deployCode() {
    const resDeploy = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ solidityCode: code }),
    })
    console.log(resDeploy)
    setResult(JSON.stringify(await resDeploy.json(), null, 2))
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
      {result ? (
        <>
          <p>See the contract response</p>
          <textarea
            readOnly
            value={result}
            className="min-h-64 bg-slate-200 rounded-lg p-4"
          />
        </>
      ) : null}
    </div>
  )
}

export default Deploy
