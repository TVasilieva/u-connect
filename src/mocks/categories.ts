import { CategoryType } from "../constants/categoryType";
import { Category } from "../types";

export const categories: Category[] = [
  {
    name: CategoryType.popular,
    Icon: `${CategoryType.popular}.png`,
  },
  {
    name: CategoryType.latest,
    Icon: `${CategoryType.latest}.png`,
  },
  {
    name: CategoryType.companies,
    Icon: `${CategoryType.companies}.png`,
  },
  {
    name: CategoryType.vacancies,
    Icon: `${CategoryType.vacancies}.png`,
  },
  {
    name: CategoryType.events,
    Icon: `${CategoryType.events}.png`,
  },
  {
    name: CategoryType.subscriptions,
    Icon: `${CategoryType.subscriptions}.png`,
  },
];
