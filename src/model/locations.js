import {observable} from "mobx";

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

export const locations = observable([]);