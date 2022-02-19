import type { FC } from 'react'

import React from 'react'

type Props = {
  is?: string
  [key: string]: unknown
}

export const Component: FC<Props> = ({ is = 'div', children, ...props }) =>
  React.createElement(is, props, children)
