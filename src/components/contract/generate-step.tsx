import { Mail } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

function GenerateStep({ nextStep }: { nextStep: () => void }) {
  const [docTemplate, setDocTemplate] = useState("default")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [accordion, setAccordion] = useState(1)

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 border border-primary">
        {/* <input type="radio" name="my-accordion-2" checked={accordion === 1} /> */}
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          <span className="text-primary font-extrabold">1. </span>
          SELECT A DOCUMENT TEMPLATE
        </div>
        <div className="collapse-content flex flex-col gap-4">
          <select
            className="select select-primary"
            value={docTemplate}
            onChange={(e) => setDocTemplate(e.target.value)}
          >
            <option disabled selected value={"default"}>
              Select
            </option>
            <option value={"supply-contract"}>SUPPLY CONTRACT</option>
          </select>
          <button
            className="btn mt-3 btn-primary self-start"
            disabled={docTemplate === "default"}
            onClick={() => setAccordion(2)}
          >
            Deploy smart contract
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-primary">
        <input
          type="radio"
          name="my-accordion-2"
          // disabled={accordion < 2}
          // checked={accordion === 2}
        />
        <div className="collapse-title text-xl font-bold">
          <span className="text-primary font-extrabold">2. </span>
          ADD INFORMATION
        </div>
        <div className="collapse-content flex flex-col gap-2">
          <p className="text-md font-bold text-primary">SUPPLY SOURCE</p>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Organic Association"
              className="input input-bordered"
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  name: e.target.value,
                }))
              }
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">E-mail</span>
            </div>
            <input
              type="email"
              placeholder="example@t0fu.tech"
              className="input input-bordered"
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <button
            className="btn mt-3 btn-primary self-start"
            disabled={formData.email === "" || formData.name === ""}
            onClick={() => setAccordion(3)}
          >
            Save data
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-primary">
        <input
          type="radio"
          name="my-accordion-2"
          // disabled={accordion < 3}
          // checked={accordion === 3}
        />
        <div className="collapse-title text-xl font-bold">
          <span className="text-primary font-extrabold">3. </span>
          GET DOCUMENT READY FOR PRINT
        </div>
        <div className="collapse-content flex flex-col gap-2 items-center">
          <div className="indicator mt-4">
            <span className="indicator-item indicator-start">
              <div className="p-2 bg-white rounded-full">
                <Mail color="black" />
              </div>
            </span>
            <Image
              src="/images/sstm-doc.png"
              alt="mail doc image"
              width={120}
              height={0}
            />
          </div>
          <p className="font-bold">YOUR SMART CONTRACT IS ON THE WAY!</p>
          <p className="text-xs">
            Please check the e-mail{" "}
            <span className="underline text-primary">mail@company.com</span>
          </p>
          <a href="#" className="text-xs font-bold mt-3 underline text-primary">
            DOCUMENT LINK
          </a>
        </div>
      </div>
      <button
        className="btn mt-3 btn-primary self-start w-full"
        disabled={accordion < 3}
        onClick={nextStep}
      >
        Next step
      </button>
    </>
  )
}

export default GenerateStep
