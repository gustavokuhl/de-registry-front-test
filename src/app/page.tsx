export default function Home() {
  async function onSubmit(formData: FormData) {
    "use server"

    const rawFormData = {
      nome: formData.get("nome"),
    }

    console.log(rawFormData)
  }
  return (
    <main className="flex justify-center items-center">
      <form action={onSubmit}>
        <input type="text" name="nome" />
        <input type="submit" />
      </form>
    </main>
  )
}
