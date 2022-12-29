import { IProps } from "./types";
import "./style.scss";

export const Arrow = ({ showNextPicture, showPreviousPicture }: IProps) => {
  return (
    <div className="arrow-container">
      <div className="arrow-container__left" onClick={showPreviousPicture}>
        <img
          src={require("../../../../assets/slider/left-arrow.png")}
          alt="left-arrow"
        />
      </div>
      <div className="arrow-container__right" onClick={showNextPicture}>
        <img
          src={require("../../../../assets/slider/right-arrow.png")}
          alt="left-arrow"
        />
      </div>
    </div>
  );
};

export default Arrow;
