import { ChangeEvent, ReactNode } from 'react'

export interface IInput {
  placeholder?: string
  value?: string
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
  onClear?: (name?: string) => void
}
