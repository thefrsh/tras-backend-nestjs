import { Link } from '../../../shared-kernel'
import { Column } from 'typeorm'

export class LogLink {

  @Column({
    nullable: true
  })
  logLink: string

  constructor(
    link?: string
  ) {
    this.logLink = link
  }

  public static of(
    link?: string
  ): LogLink {

    Link.of(link)
    return new LogLink(link)
  }
}
