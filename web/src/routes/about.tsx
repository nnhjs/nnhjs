import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <>
      <div>Hello /about!</div>
      <Link to="/">Home</Link>
    </>
  ),
})
