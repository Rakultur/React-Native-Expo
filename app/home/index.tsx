import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { App } from "../../components";
import { useTheme } from "../../themes/ThemeProvider";
import { createHomeStyles } from "./styles";

export default function Home() {
    const { theme } = useTheme();
    const styles = createHomeStyles(theme);

    return (
        <View style={styles.container}>

            {/* Header */}
            <App.Header title="RKT Dev UI" />

            {/* Hero */}
            <View style={styles.hero}>
                <Text style={styles.heroTitle}>Component Library</Text>

                <Text style={styles.heroSubtitle}>
                    Sistema de componentes reutilizables construido con React Native,
                    Expo y un Theme System escalable.
                </Text>
            </View>

            {/* Theme Switcher */}
            <View style={styles.themeSection}>
                <Text style={styles.sectionTitle}>Tema</Text>
                <App.ThemeSwitcher />
            </View>

            {/* Navigation */}
            <View style={styles.navigation}>
                <Link href="/gallery" asChild>
                    <App.Button
                        title="Component Gallery"
                        bnt_nombre="Explorar componentes"
                    />
                </Link>
            </View>

        </View>
    );
}