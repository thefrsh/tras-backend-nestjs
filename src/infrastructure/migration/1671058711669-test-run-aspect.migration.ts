import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestRunAspect1671058711669 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_run_aspects
        (
            id        SERIAL       NOT NULL PRIMARY KEY,
            uuid      VARCHAR(255) NOT NULL UNIQUE,
            name      VARCHAR(255) NOT NULL UNIQUE,
            lock_time INT          NULL
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_run_aspects;
    `)
  }
}
