import { KeyOf, createMatchingObj, toReadOnly } from '@/types/type'

const loginKeys = ['email', 'password'] as const
const inputKeys = toReadOnly(...loginKeys)

export type TInputLogin = KeyOf<typeof inputKeys>
export const OInputLogin = createMatchingObj(...loginKeys)
