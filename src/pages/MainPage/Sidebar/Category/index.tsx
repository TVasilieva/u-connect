import { IProps } from "./types";
import "./style.scss";

const Category = ({ name, Icon, chosenCategory, onClick }: IProps) => {
  const style = {
    backgroundColor: name === chosenCategory ? "#FFF" : "",
  };

  return (
    <div className="category" style={style} onClick={onClick(name)}>
      <img
        src={require(`../../../../assets/categories/${Icon}`)}
        alt={name}
        className="category__icon"
      />
      <p>{name}</p>
    </div>
  );
};

export default Category;
