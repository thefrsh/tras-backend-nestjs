import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
@ValidatorConstraint({
  async: true,
  name: 'ManualStatusExists'
})
export class ManualStatusExistsConstraintValidator implements ValidatorConstraintInterface {

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
      .from('manual_statuses', 'manual_statuses')
      .where('name = :name', { name: value })
      .getExists()
  }

  public defaultMessage(
    args?: ValidationArguments
  ): string {

    return `Manual Status '${args.value}' does not exist`
  }
}
