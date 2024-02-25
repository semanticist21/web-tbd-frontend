import { ChangeEventHandler } from 'react'

export interface IInput {
  placeholder?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClear?: (name?: string) => void
  invalid?: boolean
}
