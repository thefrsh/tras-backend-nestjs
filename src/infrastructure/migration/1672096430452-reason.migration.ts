import { MigrationInterface, QueryRunner } from 'typeorm'

export class Reason1672096430452 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        CREATE TABLE IF NOT EXISTS reasons
        (
            id          SERIAL        NOT NULL PRIMARY KEY,
            uuid        VARCHAR(255)  NOT NULL UNIQUE,
            name        VARCHAR(255)  NOT NULL UNIQUE,
            description TEXT          NOT NULL UNIQUE,
            category_id INT           NOT NULL,
            FOREIGN KEY (category_id) REFERENCES reason_categories(id)
        );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS reasons;
    `)
  }
}
