import {observable} from "mobx";

export class Location {

  @observable name = null;
  @observable category = null;
  @observable address = null;
  @observable lat = null;
  @observable long = null;

  constructor(category, name, address, lat, long) {
    this.name = name;
    this.category = category;
    this.address = address;
    this.lat = lat;
    this.long = long;
  }
}

export const locations = observable([]);