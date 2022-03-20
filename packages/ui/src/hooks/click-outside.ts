import { RefObject, useLayoutEffect } from 'react'

type ClickOutsideOptions = {
  ignoreList?: (HTMLElement | null)[]
}

export const useClickOutside = <Element extends HTMLElement = HTMLElement>(
  ref: RefObject<Element>,
  handler: () => void,
  { ignoreList = [] }: ClickOutsideOptions = {},
) => {
  useLayoutEffect(() => {
    const mouseUpHandler = (event: MouseEvent) => {
      const target = event.target as Node

      if (!ref.current || ignoreList.some(element => element && element.contains(target))) {
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
  }, [ref, handler, ignoreList])
}
