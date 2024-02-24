import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 *
 * @param classValues
 * @returns new classnames after removing redundant classes
 */
export const cn = (...classValues: ClassValue[]) => twMerge(clsx(classValues))
