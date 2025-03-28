import { useEffect, useState } from "react";
import "./Main.css";

const OptionElement = (props) => {
  //props
  const { color, setColor, label, value, id, setMainImage } = props;

  return (
    <>
      <div
        className="container_options"
        onClick={() => {
          console.log("value", id);
          setColor(id);
          setMainImage(value);
        }}
      >
        <div className="img_div">
          <div className="bed_img">
            <img className="imgstyle" src={value} alt="bed" />
          </div>
          <div className="img_title">{label}</div>
        </div>
      </div>
    </>
  );
};

export default OptionElement;
