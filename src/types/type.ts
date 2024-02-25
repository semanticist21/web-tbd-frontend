export type KeyOf<T extends readonly string[]> = T[number]

export type NullableRecord<T extends string | number | symbol, U> = Partial<
  Record<T, U>
>
