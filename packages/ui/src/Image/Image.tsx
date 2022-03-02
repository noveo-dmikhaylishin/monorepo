import type { FC } from 'react'

import React from 'react'

import { Box } from '../Box'

type Props = {
  src: string
  [key: string]: unknown
}

export const Image: FC<Props> = ({ src, ...props }) => <Box is="img" src={src} {...props} />
