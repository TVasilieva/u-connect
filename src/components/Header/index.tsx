import { FC } from "react";
import Logo from "../Logo";
import { IProps } from "./types";
import "./style.scss";
import ProfileIcon from "../ProfileIcon";

const Header: FC<IProps> = () => {
    const isAuth = true;
    return (
        <div className="header">
            <Logo />
            {!isAuth ? (
                <div className="header__links">
                    <div>Log in</div>
                    <div>Register</div>
                </div>
            ) : (
                <ProfileIcon />
            )}
        </div>
    );
};

export default Header;
