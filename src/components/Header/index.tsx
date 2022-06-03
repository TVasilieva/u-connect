import { FC } from "react";
import { IProps } from "./types";
import "./style.scss";
import Logo from "../Logo";

const Header: FC<IProps> = () => {
    return (
        <div className="header">
            <Logo/>
            
        </div>
    );
};

export default Header;
