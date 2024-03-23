export default function Home() {
  async function onSubmit(formData: FormData) {
    "use server"

    const rawFormData = {
      nome: formData.get("nome"),
    }

    await fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    })

    console.log(rawFormData)
  }
  return (
    <main className="flex flex-col gap-8 p-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Form</h1>
        <form action={onSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              name="nome"
              className="p-2 border-2 border-stone-300 rounded-md"
            />
            <input
              type="submit"
              className="p-2 border-2 border-stone-300 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </main>
  )
}
