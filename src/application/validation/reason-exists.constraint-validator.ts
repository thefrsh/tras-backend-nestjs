import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { DataSource } from 'typeorm'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
@ValidatorConstraint({
  async: true,
  name: 'ReasonExists'
})
export class ReasonExistsConstraintValidator implements ValidatorConstraintInterface {

  constructor(
    @Inject(DataSource)
    private readonly dataSource: DataSource
  ) { }

  public async validate(
    value: string,
    args?: ValidationArguments
  ): Promise<boolean> {

    return this.dataSource.createQueryBuilder()
      .select()
      .from('reasons', 'reasons')
      .where('name = :name', { name: value })
      .getExists()
  }

  public defaultMessage(
    args?: ValidationArguments
  ): string {

    return `Reason '${args.value}' does not exist`
  }
}
