import type { FC } from 'react'

import React from 'react'

type Props = {
  color?: string
}

export const Paper: FC<Props> = ({ color, children }) => <div className={color}>{children}</div>
