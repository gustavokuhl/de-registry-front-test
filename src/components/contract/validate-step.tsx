import { SquareArrowOutUpRight } from "lucide-react"

function ValidateStep() {
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
        <div className="flex gap-8">
          <div>
            <p className="text-xs">Smart Contract</p>
            <a
              href="#"
              className="text-lg font-bold text-primary flex gap-1 items-center"
            >
              Link <SquareArrowOutUpRight size={18} />
            </a>
          </div>
          <div>
            <p className="text-xs">Template</p>
            <a
              href="#"
              className="text-lg font-bold text-primary flex gap-1 items-center"
            >
              Link <SquareArrowOutUpRight size={18} />
            </a>
          </div>
          <div>
            <p className="text-xs">Signed document</p>
            <a
              href="#"
              className="text-lg font-bold text-primary flex gap-1 items-center"
            >
              Link <SquareArrowOutUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
      <button className="btn mt-3 btn-primary self-start w-full">Finish</button>
    </>
  )
}

export default ValidateStep
