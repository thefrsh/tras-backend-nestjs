/**
 * Represents an HTTP request method.
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export class HttpMethod {

  /**
   * The HTTP method {@code GET}.
   * @see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3">HTTP 1.1, section 9.3</a>
   */
  public static readonly GET: string = 'GET'

  /**
   * The HTTP method {@code HEAD}.
   * @see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4">HTTP 1.1, section 9.4</a>
   */
  public static readonly HEAD: string = 'HEAD'

  /**
   * The HTTP method {@code POST}.
   * @see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5">HTTP 1.1, section 9.5</a>
   */
  public static readonly POST: string = 'POST'

  /**
   * The HTTP method {@code PUT}.
   * @see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6">HTTP 1.1, section 9.6</a>
   */
  public static readonly PUT: string = 'PUT'

  /**
   * The HTTP method {@code PATCH}.
   * @see <a href="https://datatracker.ietf.org/doc/html/rfc5789#section-2">RFC 5789</a>
   */
  public static readonly PATCH: string = 'PATCH'

  /**
   * The HTTP method {@code DELETE}.
   * @see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.7">HTTP 1.1, section 9.7</a>
   */
  public static readonly DELETE: string = 'DELETE'

  /**
   * The HTTP method {@code OPTIONS}.
   * @see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.2">HTTP 1.1, section 9.2</a>
   */
  public static readonly OPTIONS: string = 'OPTIONS'
}
