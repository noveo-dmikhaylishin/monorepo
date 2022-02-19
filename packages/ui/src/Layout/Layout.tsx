import type { FC } from 'react'

import React from 'react'
import { classNames } from '../style/classes'
import './Layout.scss'

type Props = {
  className?: string
  [key: string]: unknown
}

export const Layout: FC<Props> = ({ children, className, ...props }) => (
  <div className={classNames('layout', className, props)}>{children}</div>
)
