import { Optional } from '../../../domain/shared-kernel'

/**
 * Represents HTTP request or response headers, mapping string header names to a list of string values.
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export class HttpHeaders {
  
  /** 
   * The HTTP {@code Accept} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">Section 5.3.2 of RFC 7231</a>
   */
  public static readonly ACCEPT: string = 'Accept'

  /** 
   * The HTTP {@code Accept-Charset} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.3">Section 5.3.3 of RFC 7231</a>
   */
  public static readonly ACCEPT_CHARSET: string = 'Accept-Charset'

  /** 
   * The HTTP {@code Accept-Encoding} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">Section 5.3.4 of RFC 7231</a>
   */
  public static readonly ACCEPT_ENCODING: string = 'Accept-Encoding'

  /** 
   * The HTTP {@code Accept-Language} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">Section 5.3.5 of RFC 7231</a>
   */
  public static readonly ACCEPT_LANGUAGE: string = 'Accept-Language'

  /**
   * The HTTP {@code Accept-Patch} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc5789#section-3.1">Section 3.1 of RFC 5789</a>
   */
  public static readonly ACCEPT_PATCH: string = 'Accept-Patch'

  /** 
   * The HTTP {@code Accept-Ranges} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.3">Section 5.3.5 of RFC 7233</a>
   */
  public static readonly ACCEPT_RANGES: string = 'Accept-Ranges'

  /** 
   * The CORS {@code Access-Control-Allow-Credentials} response header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_ALLOW_CREDENTIALS: string = 'Access-Control-Allow-Credentials'

  /** 
   * The CORS {@code Access-Control-Allow-Headers} response header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_ALLOW_HEADERS: string = 'Access-Control-Allow-Headers'

  /** 
   * The CORS {@code Access-Control-Allow-Methods} response header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_ALLOW_METHODS: string = 'Access-Control-Allow-Methods'

  /** 
   * The CORS {@code Access-Control-Allow-Origin} response header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_ALLOW_ORIGIN: string = 'Access-Control-Allow-Origin'

  /** 
   * The CORS {@code Access-Control-Expose-Headers} response header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_EXPOSE_HEADERS: string = 'Access-Control-Expose-Headers'

  /** 
   * The CORS {@code Access-Control-Max-Age} response header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_MAX_AGE: string = 'Access-Control-Max-Age'

  /** 
   * The CORS {@code Access-Control-Request-Headers} request header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_REQUEST_HEADERS: string = 'Access-Control-Request-Headers'

  /** 
   * The CORS {@code Access-Control-Request-Method} request header field name.
   * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
   */
  public static readonly ACCESS_CONTROL_REQUEST_METHOD: string = 'Access-Control-Request-Method'

  /** 
   * The HTTP {@code Age} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.1">Section 5.1 of RFC 7234</a>
   */
  public static readonly AGE: string = 'Age'

  /** 
   * The HTTP {@code Allow} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.1">Section 7.4.1 of RFC 7231</a>
   */
  public static readonly ALLOW: string = 'Allow'

  /** 
   * The HTTP {@code Authorization} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.2">Section 4.2 of RFC 7235</a>
   */
  public static readonly AUTHORIZATION: string = 'Authorization'

  /** 
   * The HTTP {@code Cache-Control} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">Section 5.2 of RFC 7234</a>
   */
  public static readonly CACHE_CONTROL: string = 'Cache-Control'

  /** 
   * The HTTP {@code Connection} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.1">Section 6.1 of RFC 7230</a>
   */
  public static readonly CONNECTION: string = 'Connection'

  /** 
   * The HTTP {@code Content-Encoding} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.2.2">Section 3.1.2.2 of RFC 7231</a>
   */
  public static readonly CONTENT_ENCODING: string = 'Content-Encoding'

  /** 
   * The HTTP {@code Content-Disposition} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
   */
  public static readonly CONTENT_DISPOSITION: string = 'Content-Disposition'

  /** 
   * The HTTP {@code Content-Language} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.3.2">Section 3.1.3.2 of RFC 7231</a>
   */
  public static readonly CONTENT_LANGUAGE: string = 'Content-Language'

  /** 
   * The HTTP {@code Content-Length} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.2">Section 3.3.2 of RFC 7230</a>
   */
  public static readonly CONTENT_LENGTH: string = 'Content-Length'

  /** 
   * The HTTP {@code Content-Location} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.4.2">Section 3.1.4.2 of RFC 7231</a>
   */
  public static readonly CONTENT_LOCATION: string = 'Content-Location'

  /** 
   * The HTTP {@code Content-Range} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.2">Section 4.2 of RFC 7233</a>
   */
  public static readonly CONTENT_RANGE: string = 'Content-Range'

  /** 
   * The HTTP {@code Content-Type} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.5">Section 3.1.1.5 of RFC 7231</a>
   */
  public static readonly CONTENT_TYPE: string = 'Content-Type'

  /** 
   * The HTTP {@code Cookie} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.3.4">Section 4.3.4 of RFC 2109</a>
   */
  public static readonly COOKIE: string = 'Cookie'

  /** 
   * The HTTP {@code Date} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.1.2">Section 7.1.1.2 of RFC 7231</a>
   */
  public static readonly DATE: string = 'Date'

  /** 
   * The HTTP {@code ETag} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">Section 2.3 of RFC 7232</a>
   */
  public static readonly ETAG: string = 'ETag'

  /** 
   * The HTTP {@code Expect} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.1">Section 5.1.1 of RFC 7231</a>
   */
  public static readonly EXPECT: string = 'Expect'

  /** 
   * The HTTP {@code Expires} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.3">Section 5.3 of RFC 7234</a>
   */
  public static readonly EXPIRES: string = 'Expires'

  /** 
   * The HTTP {@code From} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.1">Section 5.5.1 of RFC 7231</a>
   */
  public static readonly FROM: string = 'From'

  /** 
   * The HTTP {@code Host} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.4">Section 5.4 of RFC 7230</a>
   */
  public static readonly HOST: string = 'Host'

  /** 
   * The HTTP {@code If-Match} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.1">Section 3.1 of RFC 7232</a>
   */
  public static readonly IF_MATCH: string = 'If-Match'

  /** 
   * The HTTP {@code If-Modified-Since} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.3">Section 3.3 of RFC 7232</a>
   */
  public static readonly IF_MODIFIED_SINCE: string = 'If-Modified-Since'

  /** 
   * The HTTP {@code If-None-Match} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.2">Section 3.2 of RFC 7232</a>
   */
  public static readonly IF_NONE_MATCH: string = 'If-None-Match'

  /** 
   * The HTTP {@code If-Range} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.2">Section 3.2 of RFC 7233</a>
   */
  public static readonly IF_RANGE: string = 'If-Range'

  /** 
   * The HTTP {@code If-Unmodified-Since} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.4">Section 3.4 of RFC 7232</a>
   */
  public static readonly IF_UNMODIFIED_SINCE: string = 'If-Unmodified-Since'

  /** 
   * The HTTP {@code Last-Modified} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.2">Section 2.2 of RFC 7232</a>
   */
  public static readonly LAST_MODIFIED: string = 'Last-Modified'

  /** 
   * The HTTP {@code Link} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc5988">RFC 5988</a>
   */
  public static readonly LINK: string = 'Link'

  /** 
   * The HTTP {@code Location} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2">Section 7.1.2 of RFC 7231</a>
   */
  public static readonly LOCATION: string = 'Location'

  /** 
   * The HTTP {@code Max-Forwards} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.2">Section 5.1.2 of RFC 7231</a>
   */
  public static readonly MAX_FORWARDS: string = 'Max-Forwards'

  /** 
   * The HTTP {@code Origin} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
   */
  public static readonly ORIGIN: string = 'Origin'

  /** 
   * The HTTP {@code Pragma} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.4">Section 5.4 of RFC 7234</a>
   */
  public static readonly PRAGMA: string = 'Pragma'

  /** 
   * The HTTP {@code Proxy-Authenticate} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.3">Section 4.3 of RFC 7235</a>
   */
  public static readonly PROXY_AUTHENTICATE: string = 'Proxy-Authenticate'

  /** 
   * The HTTP {@code Proxy-Authorization} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.4">Section 4.4 of RFC 7235</a>
   */
  public static readonly PROXY_AUTHORIZATION: string = 'Proxy-Authorization'

  /** 
   * The HTTP {@code Range} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.1">Section 3.1 of RFC 7233</a>
   */
  public static readonly RANGE: string = 'Range'

  /** 
   * The HTTP {@code Referer} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.2">Section 5.5.2 of RFC 7231</a>
   */
  public static readonly REFERER: string = 'Referer'

  /** 
   * The HTTP {@code Retry-After} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.3">Section 7.1.3 of RFC 7231</a>
   */
  public static readonly RETRY_AFTER: string = 'Retry-After'

  /** 
   * The HTTP {@code Server} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.2">Section 7.4.2 of RFC 7231</a>
   */
  public static readonly SERVER: string = 'Server'

  /** 
   * The HTTP {@code Set-Cookie} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.2.2">Section 4.2.2 of RFC 2109</a>
   */
  public static readonly SET_COOKIE: string = 'Set-Cookie'

  /** 
   * The HTTP {@code Set-Cookie2} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc2965">RFC 2965</a>
   */
  public static readonly SET_COOKIE2: string = 'Set-Cookie2'

  /** 
   * The HTTP {@code TE} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.3">Section 4.3 of RFC 7230</a>
   */
  public static readonly TE: string = 'TE'

  /** 
   * The HTTP {@code Trailer} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.4">Section 4.4 of RFC 7230</a>
   */
  public static readonly TRAILER: string = 'Trailer'

  /** 
   * The HTTP {@code Transfer-Encoding} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.1">Section 3.3.1 of RFC 7230</a>
   */
  public static readonly TRANSFER_ENCODING: string = 'Transfer-Encoding'

  /** 
   * The HTTP {@code Upgrade} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.7">Section 6.7 of RFC 7230</a>
   */
  public static readonly UPGRADE: string = 'Upgrade'

  /** 
   * The HTTP {@code User-Agent} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.3">Section 5.5.3 of RFC 7231</a>
   */
  public static readonly USER_AGENT: string = 'User-Agent'

  /** 
   * The HTTP {@code Vary} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.4">Section 7.1.4 of RFC 7231</a>
   */
  public static readonly VARY: string = 'Vary'

  /** 
   * The HTTP {@code Via} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.7.1">Section 5.7.1 of RFC 7230</a>
   */
  public static readonly VIA: string = 'Via'

  /** 
   * The HTTP {@code Warning} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.5">Section 5.5 of RFC 7234</a>
   */
  public static readonly WARNING: string = 'Warning'

  /** 
   * The HTTP {@code WWW-Authenticate} header field name.
   * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.1">Section 4.1 of RFC
   */
  public static readonly WWW_AUTHENTICATE: string = 'WWW-Authenticate'

  private readonly headers: Map<string, string>

  constructor() {

    this.headers = new Map<string, string>()
  }

  public set(
    name: string,
    value: string
  ): HttpHeaders {

    this.headers.set(name, value)
    return this
  }

  public get(
    name: string
  ): Optional<string> {

    return Optional.of(this.headers.get(name))
  }

  public has(
    name: string
  ): boolean {

    return this.headers.has(name)
  }

  public asMap(): Map<string, string> {

    return this.headers
  }

  [name: string]: any
}
