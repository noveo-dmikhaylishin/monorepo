import type { FC } from 'react'

import React, { useCallback, useState, useEffect } from 'react'
import { Popover } from '../Popover'
import './Menu.scss'

type MenuPosition = null | Pick<DOMRect, 'top' | 'left'>

type Props = {
  value?: boolean
  anchor?: HTMLElement | null
}

export const Menu: FC<Props> = ({ anchor, children, value }) => {
  const [position, setPosition] = useState<MenuPosition>()

  const updatePosition = useCallback(
    value => {
      if (!anchor) {
        return
      }

      if (value) {
        const { top, left, height } = anchor.getBoundingClientRect()

        setPosition({ top: top + height, left })
      } else {
        setPosition(null)
      }
    },
    [anchor],
  )

  useEffect(() => updatePosition(value), [value, updatePosition])

  return (
    <>
      {position && (
        <Popover top={position.top} left={position.left}>
          {children}
        </Popover>
      )}
    </>
  )
}
