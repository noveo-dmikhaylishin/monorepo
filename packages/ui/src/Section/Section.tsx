import type { FC } from 'react'

import React from 'react'

import { Box } from '../Box'

type Props = {
  is?: string
  [key: string]: unknown
}

export const Section: FC<Props> = ({ ...props }) => <Box is="section" {...props} />
