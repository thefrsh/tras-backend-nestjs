import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestReviewRelationship1672098595505 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        ALTER TABLE IF EXISTS test_runs
            ADD COLUMN IF NOT EXISTS test_review_id INT,
            ADD FOREIGN KEY (test_review_id) REFERENCES test_reviews(id);
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        ALTER TABLE IF EXISTS test_runs
            DROP COLUMN IF EXISTS test_review_id;
    `)
  }
}
