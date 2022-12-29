import { categories } from "../../../mocks/categories";
import Category from "./Category";
import "./style.scss";
import category from "../../../store/category";
import { CategoryType } from "../../../constants/categoryType";
import { observer } from "mobx-react-lite";

const Sidebar = observer(() => {
  const handleChangeCategory = (value: CategoryType) => (): void => {
    category.change(value);
  };

  return (
    <div className="sidebar">
      {!!categories.length ? (
        categories.map((item) => (
          <Category
            name={item.name}
            Icon={item.Icon}
            chosenCategory={category.value}
            key={item.name}
            onClick={handleChangeCategory}
          />
        ))
      ) : (
        <p>There are no categories</p>
      )}
    </div>
  );
});

export default Sidebar;
