import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary" | "success" | "error";
} & React.ComponentProps<"button">;
const Button = ({ children, variant, ...rest }: ButtonProps) => {
  let classes;

  // More variant can be added like secondary
  if (variant === "primary") {
    classes =
      "bg-gradient-to-r from-orange-400 to-pink-800 text-white py-4 px-5 text-2xl rounded-2xl xl:mt-16 lg:mt-10 w-3/4 md:w-auto mx-11 md:mx-0 mt-5";
  }
  return (
    <div>
      <button className={classes} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
