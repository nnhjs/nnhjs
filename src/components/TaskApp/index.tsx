import AddTask from './AddTask.js'
import TaskList from './TaskList.js'
import { TasksProvider } from 'src/components/TaskApp/TaskContext.tsx'

export default function TaskApp() {
  return (
    <TasksProvider>
      <div>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  )
}
