import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
  onPress?: () => void;

  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;
  loading?: boolean;

  style?: StyleProp<ViewStyle>;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
