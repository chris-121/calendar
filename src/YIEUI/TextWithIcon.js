import React from "react";

const TextWithIcon = ({
  text,
  textClasses,
  icon,
  iconClasses,
  iconWidth,
  classes,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }} className={classes}>
      <span
        style={{
          width: iconWidth,
          height: "auto",
        }}
        className={iconClasses}
      >
        {icon}
      </span>
      <p className={textClasses} style={{ margin: "auto 0 auto 12px" }}>
        {text}
      </p>
    </div>
  );
};

export default TextWithIcon;
