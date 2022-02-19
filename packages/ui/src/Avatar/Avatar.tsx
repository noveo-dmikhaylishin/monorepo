import type { FC } from 'react'

import React from 'react'
import { Image } from '../Image'
import { classNames } from '../style/classes'
import './Avatar.scss'

type Props = {
  src: string
  color?: string
  width?: number
  height?: number
  style?: Record<string, unknown>
  [key: string]: unknown
}

export const Avatar: FC<Props> = ({ height = 400, width, src, color, style, ...props }) => (
  <Image
    is="img"
    src={src}
    className={classNames('avatar', { [`${color}--border`]: color })}
    style={{ width, height, ...style }}
    {...props}
  />
)
