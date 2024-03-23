"use client"

import Button from "./button"

function Deploy() {
  async function clickButton() {
    console.log("click")
  }
  // return <button onClick={clickButton}>Deploy</button>
  return (
    <Button className="" onClick={clickButton}>
      teste
    </Button>
  )
}

export default Deploy
