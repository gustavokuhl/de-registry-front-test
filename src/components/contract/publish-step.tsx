import Image from "next/image"

function PublishStep({ nextStep }: { nextStep: () => void }) {
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
          <span className="text-primary font-extrabold">5. </span>
          UPLOAD SIGNED PAPER DOCUMENT
        </div>
        <div className="collapse-content flex flex-col gap-2 items-center">
          <Image src="/images/pdf.png" alt="PDF image" width={74} height={90} />
          <p className="font-bold">UPLOAD YOUR DOCUMENT</p>
          <p className="text-xs">
            Please upload a document that was physically signed.
          </p>
          <input
            type="file"
            className="mt-3 file-input file-input-primary file-input-bordered w-full max-w-md"
          />
          <button className="btn mt-3 btn-primary">Upload now</button>
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

export default PublishStep
