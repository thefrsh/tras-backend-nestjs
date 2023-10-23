import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestAspectReviewLink1672099172259 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_run_aspects_review_links
        (
            id                  SERIAL                NOT NULL PRIMARY KEY,
            test_run_aspect_id  INT                   NOT NULL,
            test_review_link_id INT                   NOT NULL,
            FOREIGN KEY         (test_run_aspect_id)  REFERENCES test_run_aspects(id),
            FOREIGN KEY         (test_review_link_id) REFERENCES test_review_links(id)
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_run_aspects_review_links;
    `)
  }
}
