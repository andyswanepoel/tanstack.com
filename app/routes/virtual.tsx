import { Outlet } from '@remix-run/react'
import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { seo } from '~/utils/seo'
import { Scarf } from '~/components/Scarf'

export const meta: MetaFunction = () => {
  return seo({
    title:
      'TanStack Virtual | React Virtual, Solid Virtual, Svelte Virtual, Vue Virtual',
    description:
      'Headless UI for virtualizing large element lists with TS/JS, React, Solid, Svelte and Vue',
    image: 'https://github.com/tanstack/virtual/raw/main/media/header.png',
  })
}

export const loader = async (context: LoaderArgs) => {
  if (!context.request.url.includes('/virtual/v')) {
    return redirect(`${new URL(context.request.url).origin}/virtual/v3`)
  }

  return new Response('OK')
}

export default function RouteReactVirtual() {
  return (
    <>
      <Outlet />
      <Scarf id="32372eb1-91e0-48e7-8df1-4808a7be6b94" />
    </>
  )
}
