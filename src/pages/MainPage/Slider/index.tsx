import { FC, useState } from "react";
import { IProps } from "./types";
import Arrow from "./Arrow";
import "./style.scss";

const Slider: FC<IProps> = ({ images }) => {
    const [currentPicture, setCurrentPicture] = useState<number>(0);

    const showNextPicture = (): void => {
        if (images.length - 1 > currentPicture) {
            setCurrentPicture(currentPicture + 1);
        } else if (images.length - 1 === currentPicture) {
            setCurrentPicture(0);
        }
    };

    const showPreviousPicture = (): void => {
        if (currentPicture === 0) {
            setCurrentPicture(images.length - 1);
        } else if (images.length - 1 >= currentPicture) {
            setCurrentPicture(currentPicture - 1);
        }
    };

    return (
        <div className="slider">
            {images.length !== 1 && (
                <Arrow
                    showNextPicture={showNextPicture}
                    showPreviousPicture={showPreviousPicture}
                />
            )}
            <img src={require("../../../assets/slider/sp2.jpeg")} alt="sp" className="slider__image" />
        </div>
    );
};

export default Slider;
