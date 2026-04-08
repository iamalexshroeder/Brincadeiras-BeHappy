import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // Tenta buscar algo do auth para ver se as chaves são válidas
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    return (
      <div className="p-10 text-red-500">
        <h1>Erro na conexão com Supabase:</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }

  return (
    <div className="p-10 text-green-500">
      <h1>Conexão com Supabase estabelecida com sucesso!</h1>
      <pre>Session: {data.session ? "Ativa" : "Nenhuma (esperado sem login)"}</pre>
      <p className="text-sm text-foreground mt-4">
        As chaves localizadas em <code>.env.local</code> estão funcionando.
      </p>
    </div>
  )
}
