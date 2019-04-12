import {
  observable,
  action
} from 'mobx';

class User {
  @observable displayName: string;
  @observable age: number;
  @observable job: string;
  constructor() {
    this.displayName = 'linhtd';
  }
  @action
  setName(name) {
    // alert('set name' + name);
    this.displayName = name;
  }
}
export default User;