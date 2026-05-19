import 'dotenv/config'

async function main() {
  const url = 'http://localhost:3000/brincadeira/78ddb81c-9fd4-4435-b492-f468cad567a5'
  console.log(`Fetching ${url}...`)
  try {
    const res = await fetch(url, { redirect: 'manual' })
    console.log(`Status: ${res.status}`)
    console.log(`Location header: ${res.headers.get('location')}`)
  } catch (err: any) {
    console.log(`Fetch error: ${err.message}`)
  }
}

main()
