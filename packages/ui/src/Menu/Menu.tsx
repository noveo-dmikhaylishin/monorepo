import type { FC, ReactNode } from 'react'

import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react'
import { Button } from '../Button'
import { Popover } from '../Popover'
import { Icon } from '../Icon'
import { useClickOutside } from '../hooks/click-outside'
import './Menu.scss'

type MenuPosition = null | Pick<DOMRect, 'top' | 'left'>

type Activator = ({ toggle }: { toggle: () => void }) => ReactNode | string

type Props = {
  value?: boolean
  onChange?: (opened?: boolean) => void
  activator?: ReactNode | Activator
}

export const Menu: FC<Props> = ({ activator, children, value, onChange }) => {
  const activatorRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<MenuPosition>()

  const updatePosition = useCallback(value => {
    if (!activatorRef.current) {
      return
    }

    if (value) {
      const { top, left } = activatorRef.current.getBoundingClientRect()

      setPosition({ top, left })
    } else {
      setPosition(null)
    }
  }, [])

  const closeMenu = useCallback(() => updatePosition(false), [updatePosition])

  const toggleMenu = useCallback(() => {
    const opened = !!position

    if (onChange) {
      return onChange(opened)
    }

    return updatePosition(!opened)
  }, [position, updatePosition, onChange])

  const activatorElement = useMemo(() => {
    if (typeof activator === 'function') {
      return activator({ toggle: toggleMenu })
    }

    return (
      <Button rounded onClick={toggleMenu}>
        <Icon name="menu" />
      </Button>
    )
  }, [activator, toggleMenu])

  useEffect(() => updatePosition(value), [value, updatePosition])

  useClickOutside(popoverRef, closeMenu, { ignoreList: [activatorRef.current] })

  return (
    <>
      <div className="menu__activator" ref={activatorRef}>
        {activatorElement}
      </div>

      {position && (
        <Popover ref={popoverRef} top={position.top} left={position.left}>
          {children}
        </Popover>
      )}
    </>
  )
}
