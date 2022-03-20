import { useCallback, useState } from 'react'

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => setValue(prevState => !prevState), [setValue])

  return {
    value,
    toggle,
  }
}
