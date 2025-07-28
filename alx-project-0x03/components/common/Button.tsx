interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}


const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

  // Mapped classes for colors and their hover states for better Tailwind JIT compatibility.
  const colorClasses = {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    green: 'bg-green-500 hover:bg-green-600',
  };

  const backgroundColorClass = buttonBackgroundColor ? colorClasses[buttonBackgroundColor] : 'bg-slate-500 hover:bg-slate-600';


  return (
    <button onClick={action} className={`${backgroundColorClass} ${buttonSize || ''} px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white`}>
      {buttonLabel}
    </button>
  )
}

export default Button;

"use client";

import { ButtonProps } from "@/interface";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  action,

