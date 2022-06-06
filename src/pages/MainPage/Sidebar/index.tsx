import { FC, useState } from "react";
import Category from "./Category";
import "./style.scss";

const categories = [
  {
    name: "popular",
    Icon: "popular.png",
  },
  {
    name: "latest",
    Icon: "latest.png",
  },
  {
    name: "companies",
    Icon: "companies.png",
  },
  {
    name: "vacancies",
    Icon: "vacancies.png",
  },
  {
    name: "events",
    Icon: "events.png",
  },
  {
    name: "subscriptions",
    Icon: "subscriptions.png",
  },
];

const Sidebar: FC = () => {
  const [chosenCategory, setChosenCategory] = useState<string>("popular");

  const handleChangeCategory = (category: string) => (): void => {
    setChosenCategory(category);
  };

  return (
    <div className="sidebar">
      {!!categories.length ? (
        categories.map((category) => (
          <Category
            name={category.name}
            Icon={category.Icon}
            chosenCategory={chosenCategory}
            key={category.name}
            onClick={handleChangeCategory}
          />
        ))
      ) : (
        <p>There are no categories</p>
      )}
    </div>
  );
};

export default Sidebar;
