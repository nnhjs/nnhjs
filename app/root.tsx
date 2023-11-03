import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import { type LinksFunction, MetaFunction } from '@remix-run/node'

import faviconAssetUrl from './assets/favicon.svg'

import fontStylesheetUrl from './styles/font.css'
import tailwindStylesheetUrl from './styles/tailwind.css'
import { cssBundleHref } from "@remix-run/css-bundle";

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: faviconAssetUrl,
    },
    {
      rel: 'stylesheet',
      href: fontStylesheetUrl,
    },
    {
      rel: 'stylesheet',
      href: tailwindStylesheetUrl
    },
    cssBundleHref ? { rel: 'stylesheet', href: cssBundleHref } : null,
  ].filter(Boolean)
}

export const meta : MetaFunction= () => {
  return [
    {
      title: 'Blog by nnhjs | Hung Nguyen'
    }
  ]
}

export default function App() {
  return (
    <html>
    <head>
      <Links />
      <Meta />
    </head>
    <body>
    <p className="p-8 text-xl">Hello World</p>
    <Outlet />

    <Scripts />
    <LiveReload />
    </body>
    </html>
  );
}
