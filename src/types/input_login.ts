import { KeyOf } from '@/types/type'
import { createMatchingObj, toReadOnly } from '@/util/type'

const loginKeys = ['email', 'password', 'retain'] as const
const inputKeys = toReadOnly(...loginKeys)

export type KInputLogin = KeyOf<typeof inputKeys>
export const OInputLogin = createMatchingObj(...loginKeys)
