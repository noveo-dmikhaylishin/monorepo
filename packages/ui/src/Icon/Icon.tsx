import type { FC } from 'react'

import React from 'react'

import { Box } from '../Box'

type Props = {
  name: string
  className?: string
  size?: number | string
  color?: number | string
  [key: string]: unknown
}

export const Icon: FC<Props> = ({ name, className, size, color, ...props }) => (
  <Box
    is="span"
    className="material-icons"
    classes={[className, { [`${color}--text`]: color }]}
    style={{ fontSize: size }}
    {...props}
  >
    {name}
  </Box>
)
