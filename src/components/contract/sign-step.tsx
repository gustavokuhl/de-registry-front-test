import { Printer } from "lucide-react"
import Image from "next/image"

function SignStep({ nextStep }: { nextStep: () => void }) {
  return (
    <>
      <div className="p-4 bg-base-200 border border-primary flex flex-col gap-4 w-full rounded-box">
        <div>
          <p className="text-xs">Document</p>
          <p className="text-lg font-bold text-primary">
            SUPPLY CONTRACT v.1.4
          </p>
        </div>
        <div>
          <p className="text-xs">Name</p>
          <p className="text-lg font-bold text-primary">ELIANA SANT’ANNA</p>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-xs">Signed on</p>
            <p className="text-lg font-bold text-primary">
              21/03/2024 at 12:33
            </p>
          </div>
          <div>
            <p className="text-xs">Last update</p>
            <p className="text-lg font-bold text-primary">
              22/03/2024 at 12:33
            </p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 border border-primary">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-bold">
          <span className="text-primary font-extrabold">4. </span>
          PRINT & SIGN
        </div>
        <div className="collapse-content flex flex-col gap-2 items-center">
          <div className="indicator mt-4">
            <span className="indicator-item indicator-start">
              <div className="p-2 bg-white rounded-full">
                <Printer color="black" />
              </div>
            </span>
            <Image
              src="/images/sstm-doc.png"
              alt="mail doc image"
              width={120}
              height={0}
            />
          </div>
          <p className="font-bold">DOWNLOAD, PRINT & SIGN</p>
          <p className="text-xs">It's time to get the paper sign.</p>
          <button className="btn mt-3 btn-primary">Download</button>
          <a href="#" className="text-xs font-bold mt-3 underline text-primary">
            DOCUMENT LINK
          </a>
        </div>
      </div>
      <button
        className="btn mt-3 btn-primary self-start w-full"
        onClick={nextStep}
      >
        Next step
      </button>
    </>
  )
}

export default SignStep
