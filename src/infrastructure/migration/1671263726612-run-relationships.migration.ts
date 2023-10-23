import { MigrationInterface, QueryRunner } from 'typeorm'

export class RunRelationships1671263726612 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        ALTER TABLE IF EXISTS test_set_runs
            ADD COLUMN IF NOT EXISTS runner_id INT,
            ADD FOREIGN KEY (runner_id) REFERENCES users (id);

        ALTER TABLE IF EXISTS test_runs
            ADD COLUMN IF NOT EXISTS test_set_run_id INT,
            ADD FOREIGN KEY (test_set_run_id) REFERENCES test_set_runs (id);
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        ALTER TABLE test_set_runs
            DROP COLUMN IF EXISTS runner_id;

        ALTER TABLE test_runs
            DROP COLUMN IF EXISTS test_set_run_id;
    `)
  }
}
