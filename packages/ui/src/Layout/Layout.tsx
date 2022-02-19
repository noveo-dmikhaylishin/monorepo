import type { FC } from 'react'

import React from 'react'
import { classNames } from '../style/classes'
import { Component } from '../Component'
import './Layout.scss'

type Props = {
  className?: string
  is?: string
  [key: string]: unknown
}

export const Layout: FC<Props> = ({ children, is, className, ...props }) => (
  <Component is={is} className={classNames('layout', className, props)}>
    {children}
  </Component>
)
