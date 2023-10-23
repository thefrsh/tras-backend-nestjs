import { Then } from './then'

export class Ternary {

  public static of<T>(
    operand: boolean
  ): Then<T> {

    return new Then<T>(operand)
  }
}
