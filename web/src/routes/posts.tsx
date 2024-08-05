import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: () => (
    <>
      <div>Hello /posts!</div>
      <Outlet />
    </>
  ),
})
