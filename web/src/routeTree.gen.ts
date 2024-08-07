/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as PostsImport } from './routes/posts'
import { Route as AboutImport } from './routes/about'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as SettingsProfileImport } from './routes/settings.profile'
import { Route as SettingsNotificationsImport } from './routes/settings.notifications'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as FilesSplatImport } from './routes/files.$'
import { Route as LayoutLayoutBImport } from './routes/_layout.layout-b'
import { Route as LayoutLayoutAImport } from './routes/_layout.layout-a'
import { Route as PostsPostIdEditImport } from './routes/posts_.$postId.edit'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const SettingsProfileRoute = SettingsProfileImport.update({
  path: '/profile',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsNotificationsRoute = SettingsNotificationsImport.update({
  path: '/notifications',
  getParentRoute: () => SettingsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const FilesSplatRoute = FilesSplatImport.update({
  path: '/files/$',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayoutBRoute = LayoutLayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLayoutARoute = LayoutLayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => LayoutRoute,
} as any)

const PostsPostIdEditRoute = PostsPostIdEditImport.update({
  path: '/posts/$postId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/_layout/layout-a': {
      id: '/_layout/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayoutAImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/layout-b': {
      id: '/_layout/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayoutBImport
      parentRoute: typeof LayoutImport
    }
    '/files/$': {
      id: '/files/$'
      path: '/files/$'
      fullPath: '/files/$'
      preLoaderRoute: typeof FilesSplatImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/settings/notifications': {
      id: '/settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof SettingsNotificationsImport
      parentRoute: typeof SettingsImport
    }
    '/settings/profile': {
      id: '/settings/profile'
      path: '/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof SettingsProfileImport
      parentRoute: typeof SettingsImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/posts/$postId/edit': {
      id: '/posts/$postId/edit'
      path: '/posts/$postId/edit'
      fullPath: '/posts/$postId/edit'
      preLoaderRoute: typeof PostsPostIdEditImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LayoutRoute: LayoutRoute.addChildren({
    LayoutLayoutARoute,
    LayoutLayoutBRoute,
  }),
  AboutRoute,
  PostsRoute: PostsRoute.addChildren({ PostsPostIdRoute, PostsIndexRoute }),
  SettingsRoute: SettingsRoute.addChildren({
    SettingsNotificationsRoute,
    SettingsProfileRoute,
  }),
  FilesSplatRoute,
  PostsPostIdEditRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/about",
        "/posts",
        "/settings",
        "/files/$",
        "/posts/$postId/edit"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/layout-a",
        "/_layout/layout-b"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/settings": {
      "filePath": "settings.tsx",
      "children": [
        "/settings/notifications",
        "/settings/profile"
      ]
    },
    "/_layout/layout-a": {
      "filePath": "_layout.layout-a.tsx",
      "parent": "/_layout"
    },
    "/_layout/layout-b": {
      "filePath": "_layout.layout-b.tsx",
      "parent": "/_layout"
    },
    "/files/$": {
      "filePath": "files.$.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/settings/notifications": {
      "filePath": "settings.notifications.tsx",
      "parent": "/settings"
    },
    "/settings/profile": {
      "filePath": "settings.profile.tsx",
      "parent": "/settings"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    },
    "/posts/$postId/edit": {
      "filePath": "posts_.$postId.edit.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
