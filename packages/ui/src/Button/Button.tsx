import type { PropsWithChildren } from 'react'

import React, { forwardRef } from 'react'
import { Box } from '../Box'
import { classNames } from '../style/classes'
import './Button.scss'

type Props = React.HTMLProps<HTMLButtonElement> &
  PropsWithChildren<{
    color?: string
    rounded?: boolean
    [key: string]: unknown
  }>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ color = 'primary', rounded, ...props }, ref) => (
    <Box
      ref={ref}
      is="button"
      className={classNames('button', color, {
        'button--rounded': rounded,
      })}
      {...props}
    />
  ),
)
