import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReasonProjection1673154014646 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        CREATE OR REPLACE VIEW reason_projection AS
            SELECT id, name, description
            FROM reasons
    `)
  }

  /* language=PostgreSQL */
  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP VIEW IF EXISTS reason_projection;
    `)
  }
}
