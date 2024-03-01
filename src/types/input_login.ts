// file for storing scheme of input login
import { KeyOf } from '@/types/type'
import { createMatchingObj } from '@/util/type'

const loginKeys = ['email', 'password', 'retain'] as const

export type KInputLogin = KeyOf<typeof loginKeys>
export const OInputLogin = createMatchingObj(...loginKeys)
