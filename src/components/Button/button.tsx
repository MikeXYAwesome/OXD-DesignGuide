import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, color = "primary" }: Props) => {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
