"use client";

import { ButtonProps } from "@/interface";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor = "blue",
}) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    green: "bg-green-500 hover:bg-green-700",
    orange: "bg-orange-500 hover:bg-orange-700",
  };

  const bgColorClass = colorClasses[buttonBackgroundColor];

  return (
    <button
      onClick={action}
      className={`text-white font-bold py-2 px-4 rounded ${bgColorClass}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
