import {observable} from "mobx";

export class Category {

  @observable name = null;

  constructor(name) {
    this.name = name;
  }
}

export const categories = [];
