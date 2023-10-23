import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestRunAspectLock1671058711769 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_run_aspect_locks
        (
            id                 SERIAL               NOT NULL PRIMARY KEY,
            uuid               VARCHAR(255)         NOT NULL UNIQUE,
            at                 INT                  NOT NULL,
            test_run_aspect_id INT                  NOT NULL UNIQUE,
            locker_id          INT                  NOT NULL,
            FOREIGN KEY        (test_run_aspect_id) REFERENCES test_run_aspects(id),
            FOREIGN KEY        (locker_id)          REFERENCES users(id)
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_run_aspect_locks;
    `)
  }
}
