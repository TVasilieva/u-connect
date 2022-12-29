import { CategoryType } from "../../../../constants/categoryType";

export interface IProps {
  name: CategoryType;
  Icon: string;
  chosenCategory: CategoryType;
  onClick: (category: CategoryType) => () => void;
}
