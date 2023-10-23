import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestSetRun1671263534378 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_set_runs
        (
            id         SERIAL       NOT NULL PRIMARY KEY,
            uuid       VARCHAR(255) NOT NULL UNIQUE,
            name       VARCHAR(255) NOT NULL,
            start_date INT          NOT NULL,
            end_date   INT          NOT NULL,
            log_link   VARCHAR(255) NULL,
            status     VARCHAR(255) NOT NULL,
            extras     VARCHAR(255) NULL
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_set_runs;
    `)
  }
}
