import { MigrationInterface, QueryRunner } from 'typeorm'

export class User1671058711639 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
       CREATE TABLE IF NOT EXISTS users
       (
           id       SERIAL       NOT NULL PRIMARY KEY,
           uuid     VARCHAR(255) NOT NULL UNIQUE,
           username VARCHAR(255) NOT NULL UNIQUE,
           email    VARCHAR(255) NOT NULL UNIQUE,
           password VARCHAR(255) NOT NULL
       );
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    await queryRunner.query
    (`
        DROP TABLE IF EXISTS users;
    `)
  }
}
