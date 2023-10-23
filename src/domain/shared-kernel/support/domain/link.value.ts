import { Column } from 'typeorm'
import { isURL } from 'class-validator'
import { UrlException } from './exception'
import { Throws } from '../../../../infrastructure'
import { defined } from '../../../../infrastructure'

export class Link {

  @Column({
    nullable: true
  })
  link: string

  protected constructor(
    link?: string
  ) {
    this.link = link
  }

  public static of(
    link?: string
  ): Link | Throws<UrlException> {

    if (defined(link) .and (!isURL(link))) {
      throw new UrlException('Incorrect link format')
    }
    return new Link(link)
  }
}
