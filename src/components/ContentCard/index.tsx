import { FC } from "react";
import { IProps } from "./types";
import "./style.scss";

const ContentCard: FC<IProps> = ({ theme, author, content, image }) => {
    const time = 3;
    const likes = 32;
    return (
        <div className="content">
            <div className="content__header">
                <div className="content-header__left">
                    <div className="content-header__left_theme"> <img alt=" " src={require("../../assets/card/theme.png")} />
                        {theme}</div>
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
                <div className="content-main__text">{content.text}</div>
                {image && <img src={require(image)} alt=" " />}
            </div>
            <div className="content__footer">
                <div className="content-footer__left">
                    <img alt=" " src={require("../../assets/card/message.png")} />
                    <img alt=" " src={require("../../assets/card/bookmark.png")} />
                    <img alt=" " src={require("../../assets/card/download.png")} />
                </div>
                <div className="content-footer__right">
                    <img alt=" " src={require("../../assets/card/arrow-down.png")} />
                    {likes}
                    <img alt=" " src={require("../../assets/card/arrow-up.png")} />
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
