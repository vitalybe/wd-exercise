import {observable, autorun} from "mobx";

export class Category {

  @observable name = null;

  constructor(name) {
    this.name = name;
  }
}

const STORAGE_KEY = "welldone_categories";

let categoriesString = localStorage.getItem(STORAGE_KEY) || "[]";
let categoriesObservable = observable(JSON.parse(categoriesString));
if(categoriesObservable.length === 0) {
  categoriesObservable.push(new Category("default"))
}

// Persist to local storage
autorun(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(categoriesObservable));
});

export const categories = categoriesObservable;