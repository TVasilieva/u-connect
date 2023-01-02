import { makeAutoObservable } from "mobx";

class Like {
  value = 0;
  constructor() {
    makeAutoObservable(this);
  }

  like() {
    this.value = this.value + 1;
  }

  dislike() {
    this.value = this.value - 1;
  }

  get total() {
    return `You have ${Math.abs(this.value)} ${this.value < 0 ? "dis" : ""}like${
      (this.value === 1 || this.value === -1) ? "" :"s"
    }`;
  }
}

export default new Like();
