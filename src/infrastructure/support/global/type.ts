export type Throws<T extends Error> = never

export type Constructor<T> = { new (...args: any[]): T }

export type Dictionary<K extends string | number | symbol, V> = { [P in K]: V }
