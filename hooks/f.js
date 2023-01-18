"use strict";

// import { dt } from "../hooks/f";
export class dt {
  static teller(ts) {
    const d = new Date(ts);
    return d.getFullYear();
  }
}
