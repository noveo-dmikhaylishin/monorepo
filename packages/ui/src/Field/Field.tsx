import React, { forwardRef, memo } from 'react'
import { classNames } from '../style/classes'
import './Field.scss'

type InputProps = React.HTMLProps<HTMLInputElement>

type Props = InputProps & {
  value?: string
  label?: string
  color?: string
  multiline?: boolean
}

export const Field = memo(
  forwardRef<HTMLInputElement, Props>(
    ({ value, label, color = 'primary', ...props }: Props, ref) => (
      <label className="field">
        <input
          {...props}
          className={classNames('field__input', {
            [`${color}--border`]: color,
          })}
          ref={ref}
          value={value}
        />
        <span
          className={classNames('field__label', {
            [`${color}--text`]: color,
          })}
        >
          {label}
        </span>
      </label>
    ),
  ),
)
