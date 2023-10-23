import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReasonCategoriesSeed1672099172351 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        INSERT INTO reason_categories 
            VALUES (1, gen_random_uuid(), 'Test', 'Lua test implementation-related errors')
            ON CONFLICT DO NOTHING;

        INSERT INTO reason_categories
            VALUES (2, gen_random_uuid(), 'Framework', 'Test framework-related errors')
            ON CONFLICT DO NOTHING;

        INSERT INTO reason_categories
            VALUES (3, gen_random_uuid(), 'Infrastructure', 'Servers, CI/CD and Environments-related errors')
            ON CONFLICT DO NOTHING;

        INSERT INTO reason_categories
            VALUES (4, gen_random_uuid(), 'Game', 'The real, incorrect behaviour of the game')
            ON CONFLICT DO NOTHING;
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DELETE FROM reason_categories WHERE id BETWEEN 1 AND 4;
    `)
  }
}
