import type { APIRoute } from "astro"

export const get: APIRoute = async ({ params }) => {
  const res = await fetch(`https://registry.npmjs.org/${params.selected}`) //
  return {
    body: await res.text(),
    headers: {
      "content-type": "application/json",
      "cache-control": "max-age=3600"
    }
  }
}
