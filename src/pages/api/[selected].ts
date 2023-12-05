import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, ...args }) => {
  const { selected } = params
  console.log(args)
  
  if (selected === undefined) return new Response("Bad Request", { status: 400 })
  
  const res = await fetch(`https://registry.npmjs.org/${atob(selected)}`)
  
  if (res.ok === false) return new Response("Not Found", { status: 404 })
  
  return new Response(res.body, {
    headers: {
      "content-type": "application/json",
      "cache-control": "max-age=3600"
    }
  })
}
