import React from "react";
import { View } from "react-native";

import { useTheme } from "@/themes/ThemeProvider";
import { App } from "../../index";
import { createThemeSwitcherStyles } from "./styles";

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme, lightTheme, darkTheme, customTheme } = useTheme();
    const styles = createThemeSwitcherStyles(theme);

    const themes = [
        { name: "Light", value: lightTheme },
        { name: "Dark", value: darkTheme },
        { name: "Custom", value: customTheme },
    ];

    return (
        <App.Card title="Cambiar tema" variant="outline">
            <View style={styles.container}>
                {themes.map((item) => {
                    const isActive = theme === item.value;

                    return (
                        <View
                            key={item.name}
                            style={[
                                styles.button,
                                isActive && styles.activeButton,
                            ]}
                        >
                            <App.Button
                                title={item.name}
                                onPress={() => setTheme(item.value)}
                            />
                        </View>
                    );
                })}
            </View>
        </App.Card>
    );
};

export default ThemeSwitcher;