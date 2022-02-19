import type { FC } from 'react'

import React from 'react'
import { Component } from '../Component'

type Props = {
  src: string
  [key: string]: unknown
}

export const Image: FC<Props> = ({ src, ...props }) => <Component is="img" src={src} {...props} />
