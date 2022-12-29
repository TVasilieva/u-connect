import { CategoryType } from "../constants/categoryType";

export type Theme =
  | CategoryType.design
  | CategoryType.music
  | CategoryType.popular;

export type ContentType = {
  title: string;
  text: string;
};

export type Card = {
  theme: Theme;
  author: string;
  content: ContentType;
};

export type Category = {
  name: CategoryType;
  Icon: string;
};
