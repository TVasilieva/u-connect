import { useState } from "react";
import { IProps } from "./types";
import "./style.scss";

const Input = ({ color, placeholder }: IProps) => {
  const [value, setValue] = useState<string>("");

  const style = {
    backgroundColor: color,
  };

  return (
    <input
      style={style}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className="input"
    />
  );
};

export default Input;
