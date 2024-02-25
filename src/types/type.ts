export type KeyOf<T extends readonly string[]> = T[number]

export type NullableRecord<T extends string | number | symbol> = Partial<
  Record<T, string>
>

export const toReadOnly = <T>(...args: T[]) => {
  return [...args] as const
}

export const createEmptyObj = <T extends string>(
  ...args: T[]
): { [K in T]: K } => {
  const obj: any = {}

  args.forEach((arg) => {
    obj[arg] = undefined
  })

  return obj
}

export const createMatchingObj = <T extends string>(
  ...args: T[]
): { [K in T]: K } => {
  const obj: any = {}

  args.forEach((arg) => {
    obj[arg] = arg
  })

  return obj
}
