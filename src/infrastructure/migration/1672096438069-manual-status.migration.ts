import { MigrationInterface, QueryRunner } from 'typeorm'

export class ManualStatus1672096438069 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS manual_statuses
        (
            id   SERIAL       NOT NULL PRIMARY KEY,
            uuid VARCHAR(255) NOT NULL UNIQUE,
            name VARCHAR(255) NOT NULL UNIQUE
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS manual_statuses;
    `)
  }
}
