import { promises as fs } from "fs"

export async function POST(request: Request) {
  try {
    const code = await fs.readFile(
      process.cwd() + "/public/contracts/Contract.sol",
      "utf8"
    )

    return Response.json({ code: code })
  } catch (err) {
    console.error(err)
  }
}
