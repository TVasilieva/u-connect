import { FC } from "react";
import "./style.scss"

const Logo: FC = () => {
    return (
        <div className="logo">
            <img src={require("../../assets/logo.png")} alt="logo" />
            <p className="logo__title">uconnect</p>
        </div>
    );
};

export default Logo;
