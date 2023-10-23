import { Result } from 'typescript-monads'

/**
 * <i> A SPECIFICATION states a constraint on the state of another object, which may or may not be present.
 * It has multiple uses, but one that conveys the most basic concept is that a SPECIFICATION
 * can test any object to see if it satisfies the specified criteria. </i>
 * <p>
 * Eric Evans, Domain Driven Design, 2003
 *
 * @since  0.0.1
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export abstract class BaseSpecification<T, Ok, Fail> {

  public abstract isSatisfiedBy(candidate: T): Result<Ok, Fail>
}
