import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReasonCategory1672096422848 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS reason_categories
        (
            id          SERIAL       NOT NULL PRIMARY KEY,
            uuid        VARCHAR(255) NOT NULL UNIQUE,
            name        VARCHAR(255) NOT NULL UNIQUE,
            description TEXT         NOT NULL UNIQUE
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS reason_categories;
    `)
  }
}
