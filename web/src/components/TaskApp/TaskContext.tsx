import { createContext, Dispatch, useContext, useReducer } from 'react'
import { TTask } from 'src/components/TaskApp/type.ts'

type Tasks = TTask[]

type TasksAction =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TTask }
  | { type: 'deleted'; id: number }

export const TasksContext = createContext<Tasks>([])
export const TasksDispatchContext = createContext<Dispatch<TasksAction> | null>(
  null,
)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function tasksReducer(tasks: Tasks, action: TasksAction) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw new Error('Unknown action')
    }
  }
}

const initialTasks: Tasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
]

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  const dispatch = useContext(TasksDispatchContext)

  if (dispatch === null) {
    throw new Error('useTasksDispatch must be used within a TasksProvider')
  }

  return dispatch
}
