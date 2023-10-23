import { MediaType } from '../support'

/**
 *  List of supported Media Types in the application
 *  Shall be validated in the case of 'Accept' and 'Content-Type' request headers
 *
 *  @see    {@link MediaType}
 *  @see    {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation}
 *
 *  @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export const MEDIA_TYPES = [
  MediaType.ALL, MediaType.APPLICATION_JSON
]
