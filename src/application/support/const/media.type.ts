/**
 * A data structure representing Media Types.
 * Intended to use as a value of 'Content-Type' or 'Accept' headers.
 *
 * @see {@link https://tools.ietf.org/html/rfc7231#section-3.1.1.1}
 * @see {@link HttpsHeaders}
 *
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export class MediaType {
  
  public static readonly ALL: string = '*/*'
  
  /**
   * Public constant media type for {@code application/atom+xml}.
   */
  public static readonly APPLICATION_ATOM_XML: string = 'application/atom+xml'
  
  /**
   * Public constant media type for {@code application/cbor}.
   */
  public static readonly APPLICATION_CBOR: string = 'application/cbor'
  
  /**
   * Public constant media type for {@code application/x-www-form-urlencoded}.
   */
  public static readonly APPLICATION_FORM_URLENCODED: string = 'application/x-www-form-urlencoded'
  
  /**
   * Public constant media type for {@code application/graphql+json}.
   */
  public static readonly APPLICATION_GRAPHQL: string = 'application/graphql+json'
  
  /**
   * Public constant media type for {@code application/graphql-response+json}.
   */
  public static readonly APPLICATION_GRAPHQL_RESPONSE: string = 'application/graphql-response+json'
  
  /**
   * Public constant media type for {@code application/hal+json}.
   */
  public static readonly HAL_JSON: string = 'application/hal+json'
  
  /**
   * Public constant media type for {@code application/json}.
   */
  public static readonly APPLICATION_JSON: string = 'application/json'
  
  /**
   * Public constant media type for {@code application/octet-stream}.
   */
  public static readonly APPLICATION_OCTET_STREAM: string = 'application/octet-stream'
  
  /**
   * Public constant media type for {@code application/pdf}.
   */
  public static readonly APPLICATION_PDF: string = 'application/pdf'
  
  /**
   * Public constant media type for {@code application/problem+json}.
   */
  public static readonly APPLICATION_PROBLEM_JSON: string = 'application/problem+json'
  
  /**
   * Public constant media type for {@code application/problem+xml}.
   */
  public static readonly APPLICATION_PROBLEM_XML: string = 'application/problem+xml'
  
  /**
   * Public constant media type for {@code application/x-protobuf}.
   */
  public static readonly APPLICATION_PROTOBUF: string = 'application/x-protobuf'
  
  /**
   * Public constant media type for {@code application/rss+xml}.
   */
  public static readonly APPLICATION_RSS_XML: string = 'application/rss+xml'
  
  /**
   * Public constant media type for {@code application/x-ndjson}.
   */
  public static readonly APPLICATION_NDJSON: string = 'application/x-ndjson'
  
  /**
   * Public constant media type for {@code application/xhtml+xml}.
   */
  public static readonly APPLICATION_XHTML_XML: string = 'application/xhtml+xml'
  
  /**
   * Public constant media type for {@code application/xml}.
   */
  public static readonly APPLICATION_XML: string = 'application/xml'
  
  /**
   * Public constant media type for {@code image/gif}.
   */
  public static readonly IMAGE_GIF: string = 'image/gif'
  
  /**
   * Public constant media type for {@code image/jpeg}.
   */
  public static readonly IMAGE_JPEG: string = 'image/jpeg'
  
  /**
   * Public constant media type for {@code image/png}.
   */
  public static readonly IMAGE_PNG: string = 'image/png'
  
  /**
   * Public constant media type for {@code multipart/form-data}.
   */
  public static readonly MULTIPART_FORM_DATA: string = 'multipart/form-data'
  
  /**
   * Public constant media type for {@code multipart/mixed}.
   */
  public static readonly MULTIPART_MIXED: string = 'multipart/mixed'
  
  /**
   * Public constant media type for {@code multipart/related}.
   */
  public static readonly MULTIPART_RELATED: string = 'multipart/related'
  
  /**
   * Public constant media type for {@code text/event-stream}.
   */
  public static readonly TEXT_EVENT_STREAM: string = 'text/event-stream'
  
  /**
   * Public constant media type for {@code text/html}.
   */
  public static readonly TEXT_HTML: string = 'text/html'
  
  /**
   * Public constant media type for {@code text/markdown}.
   */
  public static readonly TEXT_MARKDOWN: string = 'text/markdown'
  
  /**
   * Public constant media type for {@code text/plain}.
   */
  public static readonly TEXT_PLAIN: string = 'text/plain'
  
  /**
   * Public constant media type for {@code text/xml}.
   */
  public static readonly TEXT_XML: string = 'text/xml'
}
