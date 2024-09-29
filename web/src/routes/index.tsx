import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <div>Hello /!</div>
      <Link to="/about">About</Link>
    </>
  ),
})
