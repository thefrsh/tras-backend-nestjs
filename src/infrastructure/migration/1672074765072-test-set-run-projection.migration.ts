import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestSetRunProjection1672074765072 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        CREATE OR REPLACE VIEW test_set_run_projection AS
            
            SELECT test_set_runs.*,
                   users.username AS runner
            
            FROM test_set_runs
                
            LEFT JOIN users
                ON test_set_runs.runner_id = users.id;
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        DROP VIEW test_set_run_projection;
    `)
  }
}
