import type { FC } from 'react'

import React from 'react'
import { Component } from '../Component'

type Props = {
  is?: string
  [key: string]: unknown
}

export const Section: FC<Props> = ({ ...props }) => <Component is="section" {...props} />
