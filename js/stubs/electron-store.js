class Store {
  constructor() {
    this.store = {};
  }
  get(key) {
    if (window.localStorage) return JSON.parse(localStorage.getItem(key));
    return this.store[key];
  }
  set(key, value) {
    if (window.localStorage) localStorage.setItem(key, JSON.stringify(value));
    else this.store[key] = value;
  }
  // optionally implement delete, etc.
}
module.exports = Store;
