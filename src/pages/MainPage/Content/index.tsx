/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ContentCard from "../../../components/ContentCard";
import "./style.scss";
import { cards } from "../../../mocks/cards";
import { Card } from "../../../types";
import category from "../../../store/category";
import { observer } from "mobx-react-lite";

const Content = observer(() => {
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);

  useEffect(() => {
    setFilteredCards(cards.filter((el) => el.theme === category.value));
  }, [category.value]);

  return (
    <div className="content__wrapper">
      {!!filteredCards?.length ? (
        filteredCards?.map((el) => (
          <ContentCard
            theme={el.theme}
            author={el.author}
            content={el.content}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
});

export default Content;
