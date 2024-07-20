import { createFileRoute } from '@tanstack/react-router'
import TaskApp from 'src/components/TaskApp'

export const Route = createFileRoute('/task')({
  component: Task,
})

function Task() {
  return (
    <>
      <h3>Task</h3>
      <TaskApp />
    </>
  )
}
