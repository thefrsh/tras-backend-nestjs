export enum AutoStatus {

  /**
   * Test Set/Single Test has been executed with no failures
   */
  PASSED = 'PASSED',

  /**
   * Test Set/Single Test has been executed with failures
   */
  FAILED = 'FAILED',

  /**
   * Test Set/Single Test is ongoing
   */
  RUNNING = 'RUNNING'
}
