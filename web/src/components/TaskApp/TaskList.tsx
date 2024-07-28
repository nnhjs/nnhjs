import { useState } from 'react'
import { TTask } from 'src/components/TaskApp/type.ts'
import {
  useTasks,
  useTasksDispatch,
} from 'src/components/TaskApp/TaskContext.tsx'

export default function TaskList() {
  const tasks = useTasks()

  return (
    <ul>
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
      <span>
        <input
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
    taskContent = <span>{task.text}</span>
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
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
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
      >
        Delete
      </button>
    </>
  )
}
