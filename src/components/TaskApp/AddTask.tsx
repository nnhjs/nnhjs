import { useState } from 'react'
import { useTasksDispatch } from 'src/components/TaskApp/TaskContext.tsx'
import { Button } from '@/components/ui/button.tsx'

export default function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()
  return (
    <div className="flex gap-4">
      <input
        className="placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-4 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          setText('')
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          })
        }}
      >
        Add
      </Button>
    </div>
  )
}

let nextId = 3
