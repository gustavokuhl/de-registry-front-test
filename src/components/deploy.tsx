"use client"

import { useState } from "react"
import Button from "./button"

interface ContractData {
  supplyAgent: {
    cnpj: string
    name: string
    address: {
      street: string
      city: string
      state: string
      complement: string
    }
    inscricaoEstadual: number
    inscricaoMunicipal: number
  }
  duration: number
  since: number
  unitsMeasure: string
  contractAddress: string
}

function Deploy() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState<any>()
  const [deploying, setDeploying] = useState<boolean>(false)
  const [contractAddress, setContractAddress] = useState<string>("")
  const [pinataAddress, setPinataAddress] = useState<string>("")

  async function fetchSampleContract() {
    const response = await fetch("/api/contracts", { method: "POST" })
    const json = await response.json()
    setCode(json.code)
  }

  async function saveOnPinata(formData: FormData) {
    const data = {
      supplyAgent: {
        cnpj: formData.get("supplyAgent.cnpj"),
        name: formData.get("supplyAgent.name"),
        inscricaoEstadual: formData.get("supplyAgent.inscricaoEstadual"),
        inscricaoMunicipal: formData.get("supplyAgent.inscricaoMunicipal"),
        address: {
          street: formData.get("supplyAgent.address.street"),
          city: formData.get("supplyAgent.address.city"),
          state: formData.get("supplyAgent.address.state"),
          complement: formData.get("supplyAgent.address.complement"),
        },
      },
      duration: formData.get("duration"),
      since: formData.get("since"),
      unitsMeasure: formData.get("unitsMeasure"),
      contractAddress: formData.get("contractAddress"),
    }

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

    setResult(JSON.stringify(json, null, 2))
    setContractAddress(json.contractAddress)
    setDeploying(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">Test API</h1>
      <div className="flex flex-col gap-1">
        <p>Verify your contract</p>
        <Button onClick={fetchSampleContract}>
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
        <form className="flex flex-col gap-2" action={saveOnPinata}>
          <input
            className="bg-slate-200 rounded-lg p-2"
            type="text"
            value={contractAddress}
            placeholder="contract address"
            name="contractAddress"
            readOnly
          />
          <div className="flex flex-col gap-1">
            <p className="text-xs">Supply Agent</p>
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="name"
              name="supplyAgent.name"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="cnpj"
              name="supplyAgent.cnpj"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="number"
              placeholder="Inscrição Estadual"
              name="supplyAgent.inscricaoEstadual"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="number"
              placeholder="Inscrição Municipal"
              name="supplyAgent.inscricaoMunicipal"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Physical Address</p>
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="street"
              name="supplyAgent.address.street"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="city"
              name="supplyAgent.address.city"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="state"
              name="supplyAgent.address.state"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="complement"
              name="supplyAgent.address.complement"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs">Contract Data</p>
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="number"
              placeholder="duration"
              name="duration"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="number"
              placeholder="since"
              name="since"
            />
            <input
              disabled={contractAddress === ""}
              className="bg-slate-200 rounded-lg p-2"
              type="text"
              placeholder="unitsMeasure"
              name="unitsMeasure"
            />
          </div>

          <Button
            disabled={contractAddress === "" || pinataAddress !== ""}
            type="submit"
          >
            Save on Pinata
          </Button>
        </form>
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
