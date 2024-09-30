import { fireEvent, render } from 'test-utils'
import CheckboxWithLabel from '../components/CheckboxWithLabel.tsx'

it('CheckboxWithLabel changes the text after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  )

  expect(queryByLabelText(/off/i)).toBeTruthy()

  fireEvent.click(getByLabelText(/off/i))

  expect(queryByLabelText(/on/i)).toBeTruthy()
})
