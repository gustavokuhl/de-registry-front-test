export async function POST(request: Request) {
  const userJson = await request.json()

  const res = await fetch(
    `https://getcontractdataapi.fly.dev/CIDsFromContractByUserAddress?cidOwnerAddress=${userJson.cidOwnerAddress}`
  )

  const resJson = await res.json()

  console.log(resJson.jsonCID)

  const ipfsData = await Promise.all(
    resJson.jsonCID.map(async (cid: string) => {
      const response = await fetch(`https://gateway.ipfs.io/ipfs/${cid}`)
      return response.json()
    })
  )

  const result = resJson.jsonCID.map((jsonCIDData: string, index: number) => {
    return {
      jsonCID: jsonCIDData,
      pdfCID: index in resJson.pdfCID ? resJson.pdfCID[index] : "",
      ipfsData: ipfsData[index],
    }
  }) as SmartContractData[]
  return Response.json(result)
}

export interface SmartContractData {
  jsonCID: string
  pdfCID: string
  ipfsData: IPFSdata
}

export interface IPFSdata {
  supplyAgent: SupplyAgent
  supplyArea: SupplyArea
  duration: string
  since: string
  unitsMeasure: string
  contractAddress: string
}

export interface SupplyAgent {
  cnpj: string
  name: string
  email: string
  inscricaoEstadual: string
  inscricaoMunicipal: string
  address: Address
}

export interface Address {
  cep: string
  street: string
  city: string
  state: string
  complement: string
}

export interface SupplyArea {
  name: string
}
