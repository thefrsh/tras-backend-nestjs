import { MigrationInterface, QueryRunner } from 'typeorm'

export class ManualStatusSeed1672164004569 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        INSERT INTO manual_statuses
            VALUES (1, gen_random_uuid(), 'PASSED')
            ON CONFLICT DO NOTHING;

        INSERT INTO manual_statuses
            VALUES (2, gen_random_uuid(), 'FAILED')
            ON CONFLICT DO NOTHING;
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DELETE FROM manual_statuses WHERE id BETWEEN 1 AND 2;
    `)
  }
}
