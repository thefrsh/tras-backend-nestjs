import { defined } from './function'

export {}

/**
 * Extension functions
 */
declare global {

  interface String {

    equals(other: string): boolean

    certain(): boolean

    in(options: string[]): boolean
  }

  interface Array<T> {

    hasDuplicates(): boolean

    first(): T

    last(): T

    none(predicate: (value: T) => boolean): boolean

    pushDistinct(value: T): void
  }

  interface Boolean {

    not(other: boolean): boolean

    or(other: boolean): boolean

    and(other: boolean): boolean
  }
}

String.prototype.equals = function(this: string, other: string): boolean {
  return this === other
}

String.prototype.certain = function(this: string): boolean {
  return defined(this) && !this.trim().equals('')
}

String.prototype.in = function(this: string, options: string[]): boolean {
  return options.includes(this)
}

Array.prototype.hasDuplicates = function<T>(this: T[]): boolean {
  return this.some((value, index) => this.indexOf(value) !== index)
}

Array.prototype.first = function<T>(this: T[]): T {
  return this[0]
}

Array.prototype.last = function<T>(this: T[]): T {
  return this[this.length - 1]
}

Array.prototype.none = function<T>(this: T[], predicate: (value: T) => boolean): boolean {
  return !this.some(predicate)
}

Array.prototype.pushDistinct = function<T>(this: T[], value: T): void {
  if (!this.includes(value)) this.push(value)
}

Boolean.prototype.not = function(this: boolean, other: boolean): boolean {
  return this !== other
}

Boolean.prototype.or = function(this: boolean, other: boolean): boolean {
  return this || other
}

Boolean.prototype.and = function(this: boolean, other: boolean): boolean {
  return this && other
}
