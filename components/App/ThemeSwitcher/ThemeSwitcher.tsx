import React from "react";
import { View } from "react-native";

import { useTheme } from "@/themes/ThemeProvider";
import { App } from "../../index";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, lightTheme, darkTheme, customTheme } = useTheme();

  const themes = [
    { name: "Light", value: lightTheme },
    { name: "Dark", value: darkTheme },
    { name: "Custom", value: customTheme },
  ];

  return (
    <App.Card title="Cambiar tema" variant="outline">
      <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
        {themes.map((item) => {
          const active = theme === item.value;

          return (
            <App.Button
              key={item.name}
              title={item.name}
              variant={active ? "secondary" : "outline"}
              onPress={() => setTheme(item.value)}
            />
          );
        })}
      </View>
    </App.Card>
  );
};

export default ThemeSwitcher;
