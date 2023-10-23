import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestReview1672096438094 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS test_reviews
        (
            id               SERIAL             NOT NULL PRIMARY KEY,
            uuid             VARCHAR(255)       NOT NULL UNIQUE,
            at               INT                NOT NULL,
            manual_status_id INT                NOT NULL,
            reason_id        INT                NOT NULL,
            reviewer_id      INT                NOT NULL,
            FOREIGN KEY      (manual_status_id) REFERENCES manual_statuses(id),
            FOREIGN KEY      (reason_id)        REFERENCES reasons(id),
            FOREIGN KEY      (reviewer_id)      REFERENCES users(id)
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS test_reviews;
    `)
  }
}
