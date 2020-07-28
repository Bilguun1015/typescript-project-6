import { Eventing } from './Eventing';

interface UserProps {
  // ? makes properties optional
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // override this.data with update properties
    Object.assign(this.data, update);
  }
}
