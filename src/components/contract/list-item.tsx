import { IPFSdata } from "@/app/api/contracts/retrieve/route"
import { useEffect } from "react"

interface ListItemProps {
  jsonCID: string
  pdfCID: string
  ipfsData: IPFSdata
  id: number
}

function ListItem({ jsonCID, pdfCID, ipfsData, id }: ListItemProps) {
  useEffect(() => {}, [])

  return (
    <tr>
      <th>{id}</th>
      <td>{ipfsData.supplyAgent.name}</td>
      <td>{ipfsData.supplyAgent.email}</td>
      <td>
        <a
          className="badge badge-primary"
          href={
            "https://sepolia.scrollscan.dev/address/" + ipfsData.contractAddress
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          implantado
        </a>
      </td>
      <td>
        {pdfCID ? (
          <a
            className="badge badge-primary"
            href={"https://gateway.ipfs.io/ipfs/" + pdfCID}
            target="_blank"
            rel="noopener noreferrer"
          >
            assinado
          </a>
        ) : (
          <a
            className="badge badge-warning"
            href={"https://gateway.ipfs.io/ipfs/" + pdfCID}
            target="_blank"
            rel="noopener noreferrer"
          >
            assinar
          </a>
        )}
      </td>
    </tr>
  )
}

export default ListItem
