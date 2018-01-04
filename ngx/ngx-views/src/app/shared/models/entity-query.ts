export enum QueryOperator {
  EQ
}

export class EntityQuery {
  key: string;

  constructor(builder: QBuilder) {
    this.key = builder.key;
  }
}


export class QBuilder {

  constructor() {
  }

  private _key: string;

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  build(): EntityQuery {
    return new EntityQuery(this);
  }

}
