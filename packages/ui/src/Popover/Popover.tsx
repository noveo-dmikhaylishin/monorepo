import type { ReactNode } from 'react'

import React, { forwardRef } from 'react'
import { PopoversContent } from '../portals/popovers-portal'

type Props = {
  top: number
  left: number
  children: ReactNode
}

export const Popover = forwardRef<HTMLDivElement, Props>(({ children, top, left }, ref) => (
  <PopoversContent>
    <div ref={ref} style={{ position: 'absolute', top, left }}>
      {children}
    </div>
  </PopoversContent>
))
