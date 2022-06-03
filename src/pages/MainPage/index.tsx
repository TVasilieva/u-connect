import { FC } from "react";
import Header from "../../components/Header";
import Slider from "./Slider";
import "./style.scss";

const images = [
    "../../../assets/slider/sp1.png",
    "../../../assets/slider/sp2.jpeg",
    "../../../assets/slider/sp3.jpeg",
];

const MainPage: FC = () => {
    return (
        <>
            <Header />
            <div className="main-page">
                <Slider images={images} />
            </div>
        </>
    );
};

export default MainPage;
