import React from "react";

interface ButtonProps {
  text: String;
  properties: String;
}
const Button: React.FC<ButtonProps> = ({ text, properties }) => {
  return (
    <button
      className={`rounded-2xl text-sm font-medium   px-7 py-4 ${properties}`}
    >
      {text}
    </button>
  );
};

export default Button;
