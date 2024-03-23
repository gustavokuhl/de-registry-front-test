import { PrismaClient } from "@prisma/client"

const pinataSDK = require("@pinata/sdk")

const pinata = new pinataSDK({
  pinataJWTKey: process.env.PINATA_JWT,
})
const prisma = new PrismaClient()

export default function Home() {
  async function onCreateContract(formData: FormData) {
    "use server"

    const json = {
      solidityCode: formData.get("contract"),
    }

    const res = await fetch(
      "https://deploycontractapi.fly.dev/compileAndDeploy",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(json),
      }
    )

    console.log(await res.json())
  }

  async function onSendForm(formData: FormData) {
    "use server"

    const json = {
      contract: formData.get("contract"),
      nome: formData.get("nome"),
      cpf: formData.get("cpf"),
    }

    const res = await pinata.pinJSONToIPFS(json)
    console.log(res)
  }

  async function onDeployPin(formData: FormData) {
    "use server"

    const jsonDeploy = {
      solidityCode: formData.get("contractCode"),
    }

    const resDeploy = await fetch(
      "https://deploycontractapi.fly.dev/compileAndDeploy",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(jsonDeploy),
      }
    )

    const deployResJson = await resDeploy.json()

    const json = {
      contractAddress: deployResJson.contractAddress,
      nome: formData.get("nome"),
      cpf: formData.get("cpf"),
    }

    const res = await pinata.pinJSONToIPFS(json)
    console.log(res)

    const contrato = await prisma.contrato.create({
      data: {
        address: res.IpfsHash,
      },
    })
    console.log(contrato)
  }

  return (
    <main className="flex flex-col gap-8 p-12 max-w-[400px] m-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Deploy and Pin data</h1>
        <form action={onDeployPin} className="flex flex-col gap-2">
          <textarea
            name="contractCode"
            className="p-2 border-2 border-stone-300 rounded-md"
          />
          <input
            type="text"
            name="nome"
            className="p-2 border-2 border-stone-300 rounded-md"
            placeholder="nome"
          />
          <input
            type="text"
            name="cpf"
            className="p-2 border-2 border-stone-300 rounded-md"
            placeholder="cpf"
          />
          <input
            type="submit"
            className="p-2 border-2 border-stone-300 rounded-md cursor-pointer"
            value={"Create"}
          />
        </form>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Create contract</h1>
        <form action={onCreateContract} className="flex flex-col">
          <textarea
            name="contract"
            className="p-2 border-2 border-stone-300 rounded-md"
          />
          <input
            type="submit"
            className="p-2 border-2 border-stone-300 rounded-md cursor-pointer"
            value={"Create"}
          />
        </form>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Pin contract</h1>
        <form action={onSendForm} className="flex flex-col gap-2">
          <input
            type="text"
            name="contract"
            className="p-2 border-2 border-stone-300 rounded-md"
            placeholder="contract_address"
          />
          <input
            type="text"
            name="nome"
            className="p-2 border-2 border-stone-300 rounded-md"
            placeholder="nome"
          />
          <input
            type="text"
            name="cpf"
            className="p-2 border-2 border-stone-300 rounded-md"
            placeholder="cpf"
          />
          <input
            type="submit"
            className="p-2 border-2 border-stone-300 rounded-md cursor-pointer"
            value={"Create"}
          />
        </form>
      </div>
    </main>
  )
}
