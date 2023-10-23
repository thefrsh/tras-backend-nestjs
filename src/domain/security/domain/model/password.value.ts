import { ValueObject } from '../../../shared-kernel'
import { Column } from 'typeorm'

import * as bcrypt from 'bcrypt'

@ValueObject()
export class Password {

  @Column()
  password: string

  private constructor(
    password: string
  ) {
    this.password = password
  }

  public async check(
    password: string,
    plain: boolean
  ): Promise<boolean> {

    return plain ?
      await bcrypt.compare(password, this.password) : this.password === password
  }

  public static async of(
    plain: string
  ): Promise<Password> {

    return new Password(
      await bcrypt.hash(plain, 10)
    )
  }
}
