import { useState } from 'react'

type CheckboxWithLabelProps = {
  labelOn: string
  labelOff: string
}

export default function CheckboxWithLabel({
  labelOn,
  labelOff,
}: CheckboxWithLabelProps) {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  )
}
