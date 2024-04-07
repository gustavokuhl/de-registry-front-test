"use client"

import { SmartContractData } from "@/app/api/contracts/retrieve/route"
import { useEffect, useState } from "react"
import { useActiveWallet } from "thirdweb/react"
import ListItem from "./list-item"

function ContractList() {
  const wallet = useActiveWallet()
  const [smartContractData, setSmartContractData] =
    useState<SmartContractData[]>()
  const [fetchingData, setFetchingData] = useState(false)

  async function fetchContractData() {
    if (!wallet) return console.error("Carteira não conectada")

    try {
      console.log("Fetching contract data")
      setFetchingData(true)
      const userWalletAddress = wallet.getAccount()?.address as string
      const data = await fetch("/api/contracts/retrieve", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cidOwnerAddress: userWalletAddress.substring(2),
        }),
      })
      const json = (await data.json()) as SmartContractData[]
      setSmartContractData(json)
    } catch (ex) {
      console.error("Houve um erro buscando os dados", ex)
    } finally {
      setFetchingData(false)
    }
  }

  useEffect(() => {
    fetchContractData()
  }, [wallet])

  return (
    <div className="w-full flex flex-col gap-4 items-center border border-primary px-4 py-8 rounded-2xl">
      <h2 className="text-xl font-bold">Contratos implantados</h2>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Smart Contract</th>
              <th>Signature</th>
            </tr>
          </thead>
          <tbody>
            {smartContractData
              ? smartContractData.map((data, i) => (
                  <ListItem
                    key={i}
                    id={i + 1}
                    jsonCID={data.jsonCID}
                    pdfCID={data.pdfCID}
                    ipfsData={data.ipfsData}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div>
      <button
        className="btn w-full mt-3 btn-primary self-start"
        onClick={fetchContractData}
        disabled={fetchingData}
      >
        {fetchingData ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          "Buscar dados"
        )}
      </button>
    </div>
  )
}

export default ContractList
