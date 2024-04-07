"use client"

import { useState } from "react"
import GenerateStep from "./generate-step"
import PublishStep from "./publish-step"
import SignStep from "./sign-step"
import ValidateStep from "./validate-step"

type WizzardStep = "generate" | "sign" | "publish" | "validate"

const stepIndexMap: Record<WizzardStep, number> = {
  generate: 0,
  sign: 1,
  publish: 2,
  validate: 3,
}

function ContractWizzard() {
  const [step, setStep] = useState<WizzardStep>("generate")

  let content
  switch (step) {
    case "generate":
      content = <GenerateStep nextStep={() => setStep("sign")} />
      break
    case "sign":
      content = <SignStep nextStep={() => setStep("publish")} />
      break
    case "publish":
      content = <PublishStep nextStep={() => setStep("validate")} />
      break
    case "validate":
      content = <ValidateStep />
      break
  }

  const stepIndex = stepIndexMap[step]

  return (
    <div className="w-full max-w-4xl flex flex-col gap-4 items-center border border-primary px-4 py-8 rounded-2xl">
      <h2 className="text-xl font-bold">Create new contracts</h2>
      <ul className="steps">
        <li
          className={`
            step ${stepIndex >= 0 ? "step-primary" : ""}
            cursor-pointer
          `}
          onClick={() => setStep("generate")}
        >
          Generate
        </li>
        <li
          className={`
            step ${stepIndex >= 1 ? "step-primary" : ""}
            cursor-pointer
        `}
          onClick={() => setStep("sign")}
        >
          Sign
        </li>
        <li
          className={`
            step ${stepIndex >= 2 ? "step-primary" : ""}
            cursor-pointer
          `}
          onClick={() => setStep("publish")}
        >
          Publish
        </li>
        <li
          className={`
            step ${stepIndex >= 3 ? "step-primary" : ""}
            cursor-pointer
          `}
          onClick={() => setStep("validate")}
        >
          Validate
        </li>
      </ul>
      {content}
    </div>
  )
}

export default ContractWizzard
