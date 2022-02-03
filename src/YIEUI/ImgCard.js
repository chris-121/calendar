import React from "react";

const ImgCard = ({ src, classes }) => {
  return (
    <div className={classes}>
      <img style={{ width: "100%", height: "auto" }} src={src} alt="" />
    </div>
  );
};

export default ImgCard;
