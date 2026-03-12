import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/themes/ThemeProvider";
import { createCardStyles } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = "elevated",
  style,
  header,
  footer,
}) => {
  const { theme } = useTheme();
  const styles = createCardStyles(theme);

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        style,
      ]}
    >
      {(title || header) && (
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}
          {header}
        </View>
      )}

      <View style={styles.content}>{children}</View>

      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

export default Card;