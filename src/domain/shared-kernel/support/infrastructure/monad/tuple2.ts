export class Tuple2<One, Two> {

  constructor(
    private readonly one: One,
    private readonly two: Two
  ) { }

  public get 1(): One {
    return this.one
  }

  public get 2(): Two {
    return this.two
  }
}
