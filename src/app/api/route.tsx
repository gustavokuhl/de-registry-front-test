import { promises as fs } from "fs"

export async function POST(request: Request) {
  const code = await fs.readFile(
    process.cwd() + "/contracts/Contract.sol",
    "utf8"
  )

  const res = await request.json()
  return Response.json({ res, code })
}
