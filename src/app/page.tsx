import Deploy from "@/components/deploy"
import DeployForm from "@/components/deploy-form"

export default function Home() {
  return (
    <main className="flex flex-col gap-12 p-12 max-w-[400px] m-auto">
      <DeployForm />
      <Deploy />
    </main>
  )
}
