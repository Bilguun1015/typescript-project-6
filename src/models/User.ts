import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  // ? makes properties optional
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
