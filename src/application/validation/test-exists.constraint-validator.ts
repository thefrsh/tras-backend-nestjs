import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
@ValidatorConstraint({
  async: true,
  name: 'TestExists'
})
export class TestExistsConstraintValidator implements ValidatorConstraintInterface {

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
      .from('test_runs', 'test_runs')
      .where('id = :id', { id: value })
      .getExists()
  }

  public defaultMessage(
    args?: ValidationArguments
  ): string {

    return `Test with id ${args.value} does not exist`
  }
}
