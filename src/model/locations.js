import { observable, autorun } from "mobx";
import { categories } from "./categories";

export class Location {
  @observable name = null;
  @observable category = null;
  @observable address = null;
  @observable lat = null;
  @observable lng = null;

  constructor(category, name, address, lat, lng) {
    this.name = name;
    this.category = category;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
  }
}

const STORAGE_KEY = "welldone_locations";
let locationsObservable = null;

let locationsString = localStorage.getItem(STORAGE_KEY) || "[]";
locationsObservable = observable(
  JSON.parse(locationsString).map(location => {
    location.category = categories.find(category => category.name === location.category.name);
    return location
  })
);

// Persist to local storage
autorun(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(locationsObservable));
});

export const locations = locationsObservable;
