import { ChangeEvent, Dispatch, SetStateAction } from 'react'

// input handler
export const createHandleInput = (
  obj: Record<string, string>,
  setObj: Dispatch<SetStateAction<Record<string, string>>>
) => {
  return (e?: ChangeEvent<HTMLInputElement>) => {
    const name = e?.target.name
    const value = e?.target.value

    if (!name) return

    setObj({
      ...obj,
      [name]: value || '',
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

// boolean handler
export const createHandleCheck = (
  obj: Record<string, boolean>,
  setObj: Dispatch<SetStateAction<Record<string, boolean>>>
) => {
  return (e?: ChangeEvent<HTMLInputElement>) => {
    const name = e?.target.name
    const value = e?.target.checked

    if (!name) return

    setObj({
      ...obj,
      [name]: value || false,
    })
  }
}
