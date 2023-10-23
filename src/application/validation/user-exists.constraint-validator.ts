import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
@ValidatorConstraint({
  async: true,
  name: 'UserExists'
})
export class UserExistsConstraintValidator implements ValidatorConstraintInterface {

  constructor(
    @Inject(DataSource)
    private readonly dataSource: DataSource
  ) { }

  public async validate(
    value: number,
    args?: ValidationArguments
  ): Promise<boolean> {

    return this.dataSource.createQueryBuilder()
      .select()
      .from('users', 'users')
      .where('username = :username', { username: value })
      .getExists()
  }

  public defaultMessage(
    args?: ValidationArguments
  ): string {

    return `User '${args.value}' does not exist`
  }
}
