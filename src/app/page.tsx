export default function Home() {
  async function onSubmit(formData: FormData) {
    "use server"

    const res = await fetch(
      "https://deploycontractapi.fly.dev/compileAndDeploy",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          solidityCode:
            "pragma solidity ^0.8.0; contract SimpleStorage { uint storedData; function set(uint x) public { storedData = x; } function get() public view returns (uint) { return storedData; }}",
        }),
      }
    )

    console.log(await res.json())
  }
  return (
    <main className="flex flex-col gap-8 p-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Create contract</h1>
        <form action={onSubmit}>
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
