import type { FC } from 'react'

import React from 'react'
import { PopoversPlaceholder } from '../portals/popovers-portal'

export const Application: FC = ({ children }) => (
  <>
    {children}
    <PopoversPlaceholder />
  </>
)
