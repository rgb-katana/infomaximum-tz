import { action, computed, makeObservable, observable } from 'mobx';
import { Car } from '../../graphql/generated';

class FavouriteStore {
  favourites: Array<Car> = [];

  constructor() {
    makeObservable(this, {
      favourites: observable,
      favouritesCount: computed,
      addCar: action,
      removeCar: action,
    });
  }

  get favouritesCount() {
    return this.favourites.length;
  }

  addCar(car: Car) {
    this.favourites.push(car);
  }

  removeCar(id: number) {
    this.favourites = this.favourites.filter(car => car.id !== id);
  }
}

export const favouriteStore = new FavouriteStore();
