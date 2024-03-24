"use client"

import { useState } from "react"
import Button from "./button"

function Deploy() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState<any>()
  const [deploying, setDeploying] = useState<boolean>(false)
  const [pinataAddress, setPinataAddress] = useState<string>("")
  const [data, setData] = useState<{
    address: string
    name: string
    cpf: string
  }>({
    address: "",
    name: "",
    cpf: "",
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log([e.target.name], e.target.value)
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  async function fetchContract() {
    const response = await fetch("/api/contracts", { method: "POST" })
    console.log(response)
    const json = await response.json()
    setCode(json.code)
  }

  async function saveOnPinata() {
    const response = await fetch("/api/pinata", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    setPinataAddress(json.IpfsHash)
  }

  async function deployCode() {
    setDeploying(true)
    const resDeploy = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ solidityCode: code }),
    })

    const json = await resDeploy.json()

    console.log(resDeploy)
    setResult(JSON.stringify(json, null, 2))
    setData((data) => ({ ...data, address: json.contractAddress }))
    setDeploying(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">Test API</h1>
      <div className="flex flex-col gap-1">
        <p>Verify your contract</p>
        <Button onClick={fetchContract}>
          Fetch Example Contract from IPFS
        </Button>
        <textarea
          className="min-h-64 bg-slate-200 rounded-lg p-4"
          readOnly
          value={code}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>See the contract response</p>
        <Button disabled={code === ""} className="" onClick={deployCode}>
          {deploying ? "Deploying..." : "Deploy on Otavio API"}
        </Button>
        <textarea
          readOnly
          value={result}
          className="min-h-64 bg-slate-200 rounded-lg p-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Save the data on Pinata</p>
        <input
          onChange={handleInputChange}
          className="bg-slate-200 rounded-lg p-2"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          onChange={handleInputChange}
          className="bg-slate-200 rounded-lg p-2"
          type="text"
          placeholder="cpf"
          name="cpf"
        />
        <input
          onChange={handleInputChange}
          className="bg-slate-200 rounded-lg p-2"
          type="text"
          value={data.address}
          placeholder="address"
          name="address"
          readOnly
          disabled
        />
        <Button disabled={code === ""} onClick={saveOnPinata}>
          Save on Pinata
        </Button>
        <Button
          disabled={pinataAddress === ""}
          onClick={() =>
            window.open(
              "https://gateway.ipfs.io/ipfs/" + pinataAddress,
              "_blank",
              "noopener"
            )
          }
        >
          Show on Pinata
        </Button>
      </div>
    </div>
  )
}

export default Deploy
