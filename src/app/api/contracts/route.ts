export async function POST(request: Request) {
  try {
    const res = await fetch(
      "https://gateway.ipfs.io/ipfs/QmfAvVLUUcsdDp25ZWkivxTGjyFDBtaXfcunhMe27AWxgY"
    )
    return Response.json({ code: await res.text() })
  } catch (err) {
    console.error(err)
  }
}
