import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId/edit')({
  component: () => <div>Hello /posts/$postId/edit!</div>
})