import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export const createHandleInput = (
  obj: Record<string, string>,
  setObj: Dispatch<SetStateAction<Record<string, string>>>
) => {
  return (e?: ChangeEvent<HTMLInputElement>) => {
    const name = e?.target.name
    const value = e?.target.value

    if (!name || !value) return

    setObj({
      ...obj,
      [name]: value,
    })
  }
}

export const createHandleClearInput = (
  obj: Record<string, string>,
  setObj: Dispatch<SetStateAction<Record<string, string>>>
) => {
  return (name?: string) => {
    if (!name) return

    setObj({
      ...obj,
      [name]: '',
    })
  }
}
