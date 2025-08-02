import type { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  action?: () => void;
  buttonLabel: string;
  buttonBackgroundColor?: "blue" | "green" | "orange" | "red" | "gray";
  type?: "button" | "submit" | "reset";
}