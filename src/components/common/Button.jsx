import React from "react";
import scn from "scn";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={scn(
        "w-full p-3 rounded-full bg-white text-black font-semibold text-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
