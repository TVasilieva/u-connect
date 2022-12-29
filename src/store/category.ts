import { makeAutoObservable } from "mobx";
import { CategoryType } from "../constants/categoryType";

class CategoryStore {
  value = CategoryType.popular;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  change(category: CategoryType) {
    this.value = category;
  }
}

export default new CategoryStore();
