import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReasonSeed1672099797343 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        INSERT INTO reasons
            VALUES (1, gen_random_uuid(), 'Test Error', 'Incorrect Lua test implementation', 1)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (2, gen_random_uuid(), 'Event Handler Error', 'Extras-related technical error', 1)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (3, gen_random_uuid(), 'Game Config Error', 'To do', 1)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (4, gen_random_uuid(), 'Framework General Error', 'Test framework technical error', 2)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (5, gen_random_uuid(), 'Test Environment Error', 'Incorrect test environment settings', 2)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (6, gen_random_uuid(), 'Device Error', 'Technical error related to the used device', 3)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (7, gen_random_uuid(), 'Farm Error', 'Technical error related to the device farm', 3)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (8, gen_random_uuid(), 'Test Report Error', 'Technical error related to Allure reports', 3)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (9, gen_random_uuid(), 'Game Backend Error', 'Game servers infrastructure technical error', 3)
            ON CONFLICT DO NOTHING;

        INSERT INTO reasons
            VALUES (10, gen_random_uuid(), 'Game Error', 'Business error related to incorrect game behavior', 4)
            ON CONFLICT DO NOTHING;
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DELETE FROM reasons WHERE id BETWEEN 1 AND 10;
    `)
  }
}
