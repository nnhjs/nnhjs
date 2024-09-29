import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return (
    <>
      <div>Please select a post!</div>
      <Link
        to="/posts/$postId"
        params={{
          postId: '1',
        }}
      >
        Post 1
      </Link>
    </>
  )
}
