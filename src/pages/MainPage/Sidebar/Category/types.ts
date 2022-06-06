export interface IProps {
  name: string;
  Icon: string;
  chosenCategory: string;
  onClick: (category: string) => () => void;
}
