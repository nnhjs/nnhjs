import { useState } from 'react'
import { TTask } from 'src/components/TaskApp/type.ts'
import {
  useTasks,
  useTasksDispatch,
} from 'src/components/TaskApp/TaskContext.tsx'

export default function TaskList() {
  const tasks = useTasks()

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

interface TaskProps {
  task: TTask
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useTasksDispatch()

  let taskContent
  if (isEditing) {
    taskContent = (
      <span className="pl-2">
        <input
          className="border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }}
        />
      </span>
    )
  } else {
    taskContent = <span className="pl-2">{task.text}</span>
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: e.target.checked,
              },
            })
          }}
        />
        {taskContent}
      </label>
      {isEditing ? (
        <button
          onClick={() => setIsEditing(false)}
          className="ml-2 px-2 bg-green-200 rounded-md"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="ml-2 px-2 bg-amber-200 rounded-md"
        >
          Edit
        </button>
      )}

      <button
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id,
          })
        }}
        className="ml-2 px-2 bg-red-200 rounded-md"
      >
        Delete
      </button>
    </>
  )
}
