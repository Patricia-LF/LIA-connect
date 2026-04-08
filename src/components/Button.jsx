import React from "react";
import styles from "./Button.module.css";
import arrowRight from "../assets/arrow-right.svg";

export default function Button({
  ariaPressed,
  children,
  disabled = false,
  onClick,
  selected = false,
  style,
  type = "button",
  variant = "primary",
}) {
  let className = styles.button;

  if (variant === "primary") {
    className += ` ${styles["button-primary"]}`;
  } else if (variant === "secondary") {
    className += ` ${styles["button-secondary"]}`;
    if (selected) className += ` ${styles.selected}`;
  }

  return (
    <button
      type={type}
      aria-pressed={ariaPressed}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
      {variant === "primary" && <img src={arrowRight}></img>}
    </button>
  );
}
