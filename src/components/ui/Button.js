import React from "react";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
