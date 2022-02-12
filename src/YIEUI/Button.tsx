import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary" | "success" | "error" | "filter";
  classes: string;
} & React.ComponentProps<"button">;
const Button = ({ classes, children, variant, ...rest }: ButtonProps) => {
  let btnClasses;

  // More variant can be added like secondary
  if (variant === "primary") {
    btnClasses =
      "bg-gradient-to-r from-orange-400 to-pink-800 text-white py-4 px-5 text-2xl rounded-2xl xl:mt-16 lg:mt-10 w-3/4 md:w-auto mx-11 md:mx-0 mt-5";
  } else if (variant === "secondary") {
    btnClasses = "bg-yellow-200 py-1 px-4 rounded-md hover:bg-yellow-300";
  } else if (variant === "filter") {
    btnClasses = "bg-gray-200 py-1 px-3 rounded-sm ";
  }
  return (
    <div className={classes}>
      <button className={btnClasses} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
