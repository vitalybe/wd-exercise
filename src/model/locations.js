import { observable } from "mobx";
import { autorun } from "mobx";

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

let locationsString = localStorage.getItem(STORAGE_KEY);
if (locationsString) {
  locationsObservable = observable(JSON.parse(locationsString));
} else {
  locationsObservable = observable([]);
}

// Persist to local storage
autorun(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(locationsObservable))
});


export const locations = locationsObservable;
