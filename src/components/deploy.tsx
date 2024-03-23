"use client"

import Button from "./button"

function Deploy() {
  async function clickButton() {
    const rest = await fetch("/api", { method: "POST" })
    console.log(await rest.json())
  }

  return (
    <div>
      <h1 className="text-xl">Test API</h1>
      <Button className="" onClick={clickButton}>
        teste
      </Button>
    </div>
  )
}

export default Deploy
