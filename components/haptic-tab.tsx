// components/haptic-tab.tsx

import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable } from "react-native";

export function HapticTab({ children, ...props }: any) {
  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (props.onPress) props.onPress();
  };

  return (
    <Pressable {...props} onPress={handlePress}>
      {children}
    </Pressable>
  );
}