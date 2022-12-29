import { IProps } from "./types";
import "./style.scss";
import likes from "../../store/likes";
import { observer } from "mobx-react-lite";

const ContentCard = observer(({ theme, author, content, image }: IProps) => {
  const time = 3;

  const addLike = () => {
    likes.like();
  };
  const removeLike = () => {
    likes.dislike();
  };

  return (
    <div className="content">
      <div className="content__header">
        <div className="content-header__left">
          <div className="content-header__left_theme">
            <img alt=" " src={require("../../assets/card/theme.png")} />
            {theme}
          </div>
          <div className="content-header__left_author">{author}</div>
          <div className="content-header__left_time">{time} hours</div>
        </div>
        <div className="content-header__right">
          <img alt=" " src={require("../../assets/card/subscribe.png")} />
          Subscribe
        </div>
      </div>
      <div className="content__main">
        <div className="content-main__title">{content.title}</div>
        <div className="content-main__text">{content.text}
        {likes.total}</div>
        {image && <img src={require(image)} alt=" " />}
      </div>
      <div className="content__footer">
        <div className="content-footer__left">
          <img alt=" " src={require("../../assets/card/message.png")} />
          <img alt=" " src={require("../../assets/card/bookmark.png")} />
          <img alt=" " src={require("../../assets/card/download.png")} />
        </div>
        <div
          className={`content-footer__right content-footer__${
            likes.value < 0 ? "dislike" : likes.value === 0 ? "neutral" : "like"
          }`}
        >
          <img
            alt="dislike"
            src={require("../../assets/card/arrow-down.png")}
            onClick={removeLike}
          />
          {likes.value}
          <img
            alt="like"
            src={require("../../assets/card/arrow-up.png")}
            onClick={addLike}
          />
        </div>
      </div>
    </div>
  );
});

export default ContentCard;
