import { createFileRoute } from '@tanstack/react-router'

const fetchPost = async (postId: string) => {
  const response = await fetch(`/api/posts/${postId}`)
  return response.json()
}

export const Route = createFileRoute('/posts/$postId')({
  // In a loader
  loader: ({ params }) => fetchPost(params.postId),
  // Or in a component
  component: PostComponent,
})

function PostComponent() {
  const { postId } = Route.useParams()
  return <div>Post ID: {postId}</div>
}
