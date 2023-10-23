import { MigrationInterface, QueryRunner } from 'typeorm'

export class TestRunProjection1673140969923 implements MigrationInterface {

  public async up(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        CREATE OR REPLACE VIEW test_run_projection AS
            
            SELECT test_runs.*,
                   users.username AS reviewer,
                   reasons.name AS reason,
                   manual_statuses.name AS manual_status,
                   (SELECT EXISTS(
                       SELECT test_run_aspect_id
                       FROM test_run_aspect_locks
                       WHERE test_run_aspect_id = test_run_aspects.id
                   )) AS locked,
                   array_agg(test_review_links.link) AS links
            
            FROM test_runs
                
            LEFT JOIN test_reviews
                ON test_runs.test_review_id = test_reviews.id
            LEFT JOIN users
                ON test_reviews.reviewer_id = users.id
            LEFT JOIN reasons
                ON test_reviews.reason_id = reasons.id
            LEFT JOIN manual_statuses
                ON test_reviews.manual_status_id = manual_statuses.id
            LEFT JOIN test_run_aspects
                ON test_runs.test_run_aspect_id = test_run_aspects.id
            LEFT JOIN test_run_aspect_locks
                ON test_run_aspect_locks.test_run_aspect_id = test_run_aspects.id
            LEFT JOIN test_run_aspects_review_links
                ON test_run_aspects_review_links.test_run_aspect_id = test_run_aspects.id
            LEFT JOIN test_review_links
                ON test_run_aspects_review_links.test_review_link_id = test_review_links.id
            
            GROUP BY test_runs.id,
                     reviewer,
                     reason,
                     manual_status,
                     locked
    `)
  }

  public async down(
    queryRunner: QueryRunner
  ): Promise<void> {

    /* language=PostgreSQL */
    await queryRunner.query
    (`
        DROP VIEW IF EXISTS test_run_projection;
    `)
  }
}
