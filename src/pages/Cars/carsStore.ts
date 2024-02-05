import { action, makeObservable, observable } from 'mobx';

export type FilterValue =
  | 'availability'
  | 'alphabetical'
  | '-alphabetical'
  | 'release'
  | '-release'
  | 'price'
  | '-price';

class CarsStore {
  search: string = '';
  filter: FilterValue = 'availability';

  constructor() {
    makeObservable(this, {
      search: observable,
      filter: observable,
      setSearch: action,
      setFilter: action,
    });
  }

  setSearch(newSearch: string) {
    this.search = newSearch;
  }

  setFilter(newFilter: FilterValue) {
    this.filter = newFilter;
  }
}

export const carsStore = new CarsStore();
