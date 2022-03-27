import { useCallback, useState } from 'react'

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => setValue(prevState => !prevState), [setValue])

  const turnOn = useCallback(() => setValue(true), [setValue])

  const turnOff = useCallback(() => setValue(false), [setValue])

  return {
    value,
    toggle,
    turnOn,
    turnOff,
  }
}
