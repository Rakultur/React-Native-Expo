import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface CardProps {
  title?: string;
  children?: ReactNode;

  header?: ReactNode;
  footer?: ReactNode;

  variant?: "elevated" | "outline" | "flat";

  style?: ViewStyle;
}