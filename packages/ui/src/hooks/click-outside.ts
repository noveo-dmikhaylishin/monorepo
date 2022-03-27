import { RefObject, useLayoutEffect } from 'react'

export const useClickOutside = <Element extends HTMLElement = HTMLElement>(
  ref: RefObject<Element>,
  handler: () => void,
) => {
  useLayoutEffect(() => {
    const mouseUpHandler = (event: MouseEvent) => {
      const target = event.target as Node

      if (!ref.current) {
        return
      }

      if (!ref.current.contains(target)) {
        handler()
      }
    }

    document.addEventListener('mouseup', mouseUpHandler, true)

    return () => {
      document.removeEventListener('mouseup', mouseUpHandler, true)
    }
  }, [ref, handler])
}
