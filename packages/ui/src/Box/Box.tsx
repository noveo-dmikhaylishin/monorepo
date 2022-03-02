import type { FC } from 'react'
import type { Classes } from '../style/classes'

import React, { memo } from 'react'
import { classNames } from '../style/classes'

type Props = {
  is?: string
  classes?: Classes
  className?: string
  [key: string]: unknown
}

export const Box: FC<Props> = memo(({ is = 'div', children, classes, className, ...props }) => {
  const propsWithClasses = classes
    ? {
        className: classNames(classes, className),
        ...props,
      }
    : props

  return React.createElement(is, propsWithClasses, children)
})
