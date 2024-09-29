import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId/edit')({
  component: PostEditComponent,
})

function PostEditComponent() {
  const { postId } = Route.useParams()
  return (
    <>
      <div>Hello /posts/{postId}/edit!</div>
    </>
  )
}
