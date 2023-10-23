import { MigrationInterface, QueryRunner } from 'typeorm'

export class ReasonCategoryProjection1673154869548 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        CREATE OR REPLACE VIEW reason_category_projection AS
            
            SELECT reason_categories.id,
                   reason_categories.name,
                   reason_categories.description,
                   json_agg(
                       json_build_object(
                           'id',          reasons.id,
                           'name',        reasons.name,
                           'description', reasons.description
                       )
                   ) AS reasons
            
            FROM reason_categories
            
            LEFT JOIN reasons
                ON reasons.category_id = reason_categories.id

            GROUP BY reason_categories.id,
                     reason_categories.name,
                     reason_categories.description
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        DROP VIEW IF EXISTS reason_category_projection
    `)
  }
}
