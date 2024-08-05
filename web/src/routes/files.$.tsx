import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/files/$')({
  component: FilesComponent,
})

function FilesComponent() {
  const { _splat } = Route.useParams()
  return (
    <div>
      _splat: <code>${_splat}</code>
    </div>
  )
}
