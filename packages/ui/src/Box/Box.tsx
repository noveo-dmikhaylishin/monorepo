import type { FC } from 'react'
import type { Classes } from '../style/classes'

import React, { forwardRef, memo } from 'react'
import { classNames } from '../style/classes'

type Props = {
  is?: string
  classes?: Classes
  className?: string
  [key: string]: unknown
}

export const Box: FC<Props> = memo(
  forwardRef(({ is = 'div', children, classes, className, ...props }, ref) => {
    const propsWithClasses = {
      className: classes ? classNames(classes, className) : className,
      ref,
      ...props,
    }

    return React.createElement(is, propsWithClasses, children)
  }),
)
