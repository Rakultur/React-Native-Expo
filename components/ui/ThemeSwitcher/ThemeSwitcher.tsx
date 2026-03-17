import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../themes/ThemeProvider";
import { createStyles } from "./style";

export function ThemeSwitcher() {
    const { setTheme, themes, theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setTheme(themes.light)}
                style={[
                    styles.button,
                    theme === themes.light
                        ? styles.buttonActive
                        : styles.buttonInactive,
                ]}
            >
                <Text style={styles.text}>Light</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setTheme(themes.dark)}
                style={[
                    styles.button,
                    theme === themes.dark
                        ? styles.buttonActive
                        : styles.buttonInactive,
                ]}
            >
                <Text style={styles.text}>Dark</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setTheme(themes.custom)}
                style={[
                    styles.button,
                    theme === themes.custom
                        ? styles.buttonActive
                        : styles.buttonInactive,
                ]}
            >
                <Text style={styles.text}>Custom</Text>
            </TouchableOpacity>
        </View>
    );
}