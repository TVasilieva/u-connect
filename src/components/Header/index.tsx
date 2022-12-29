import { IProps } from "./types";
import "./style.scss";
import Input from "../Input";

const Header = ({ onClick }: IProps) => {
  const notifications: number = 1;

  return (
    <div className="header">
      <div className="header__left">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          onClick={onClick}
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
        <a className="left__logo" href="/">
          UC
        </a>
      </div>
      <div className="header__search">
        <Input color="#ffdee5" placeholder="Поиск" />
      </div>

      <button className="header__create">
        <img src={require("../../assets/header/plus.png")} alt="" />
        Create
      </button>

      <div className="header__right">
        <div className="right__notifications">
          <img src={require("../../assets/header/notifications.png")} alt=" " />

          {!!notifications && (
            <div className="notifications__circle">{notifications}</div>
          )}
        </div>
        <div className="right__user">
          <img src={require("../../assets/header/user.png")} alt=" " />
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
