import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { useTheme } from "@/themes/ThemeProvider";
import { createButtonStyles } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  style,
  leftIcon,
  rightIcon,
}) => {
  const { theme } = useTheme();
  const styles = createButtonStyles(theme);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.text} />
      ) : (
        <View style={styles.content}>
          {leftIcon}
          <Text style={[styles.text, styles[`text_${variant}`]]}>{title}</Text>
          {rightIcon}
        </View>
      )}
    </Pressable>
  );
};

export default Button;
