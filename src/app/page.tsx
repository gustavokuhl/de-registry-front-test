import Deploy from "@/components/deploy"

const pinataSDK = require("@pinata/sdk")

const pinata = new pinataSDK({
  pinataJWTKey: process.env.PINATA_JWT,
})

export default function Home() {
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
        <Deploy />
      </div>
    </main>
  )
}
