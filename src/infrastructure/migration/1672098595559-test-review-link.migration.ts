import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestReviewLink1672098595559 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_review_links
        (
            id   SERIAL       NOT NULL PRIMARY KEY,
            uuid VARCHAR(255) NOT NULL UNIQUE,
            link VARCHAR(255) NOT NULL UNIQUE
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_review_links;
    `)
  }
}
