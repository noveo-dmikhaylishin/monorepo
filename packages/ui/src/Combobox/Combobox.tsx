import type { FC } from 'react'

import React, { forwardRef, memo, useState, useRef, useMemo, useCallback } from 'react'
import { Menu } from '../Menu'
import { Field } from '../Field'
import { Box } from '../Box'
import { useToggle } from '../hooks/toggle'

type SelectItem = {
  value: string
  text: string
}

type SelectItemProps = SelectItem & {
  onClick: (event: Event) => void
}

type Props = {
  label?: string
  items?: SelectItem[]
  onChange?: (event: Event) => void
  [key: string]: unknown
}

export const SelectItem = ({ text, value, onClick }: SelectItemProps) => (
  <Box key={text} data-value={value} onClick={onClick}>
    {text}
  </Box>
)

export const Combobox: FC<Props> = memo(
  forwardRef<HTMLInputElement, Props>(({ label, items, onChange, ...props }: Props, ref) => {
    const fieldRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')
    const { value: opened, turnOn: open, turnOff: close } = useToggle(false)

    const filteredItems = useMemo(
      () => items?.filter(({ text }) => text.toLowerCase().includes(search.toLowerCase())),
      [items, search],
    )

    const onChangeHandler = useCallback(event => setSearch(event.target.value), [setSearch])

    const onSelectValue = useCallback(
      event => {
        const { value } = event.target.dataset

        setValue(value)
        setSearch(value)

        const nativeEvent = event.nativeEvent
        const clonedEvent = new nativeEvent.constructor('change')

        Object.defineProperty(clonedEvent, 'target', {
          configurable: false,
          writable: true,
          enumerable: true,
          value: { value },
        })
        onChange?.(clonedEvent)
        close()
      },
      [setValue, onChange, close],
    )

    return (
      <Box is="div" ref={fieldRef}>
        <Field
          {...props}
          label={label}
          value={search}
          ref={ref}
          onFocus={open}
          onChange={onChangeHandler}
        />
        <Menu value={opened} anchor={fieldRef.current}>
          {filteredItems?.map(item => (
            <SelectItem {...item} key={item.text} onClick={onSelectValue} />
          ))}
        </Menu>
      </Box>
    )
  }),
)

Combobox.defaultProps = {
  items: [],
}
