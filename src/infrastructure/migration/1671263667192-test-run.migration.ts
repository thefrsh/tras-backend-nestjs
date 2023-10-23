import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestRun1671263667192 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_runs
        (
            id                 SERIAL               NOT NULL PRIMARY KEY,
            uuid               VARCHAR(255)         NOT NULL UNIQUE,
            name               VARCHAR(255)         NOT NULL,
            start_date         INT                  NOT NULL,
            end_date           INT                  NOT NULL,
            log_link           VARCHAR(255)         NULL,
            auto_status        VARCHAR(255)         NOT NULL,
            test_run_aspect_id INT                  NOT NULL UNIQUE,
            FOREIGN KEY        (test_run_aspect_id) REFERENCES test_run_aspects(id)
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_runs;
    `)
  }
}
