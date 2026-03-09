import { Link } from "expo-router"
import React from "react"
import { Pressable, Text, View } from "react-native"

import { useTheme } from "../themes/ThemeProvider"

export default function Home() {

    const { theme, setTheme, lightTheme, darkTheme, customTheme } = useTheme()

    const themes = [
        { name: "Light", value: lightTheme },
        { name: "Dark", value: darkTheme },
        { name: "Custom", value: customTheme }
    ]

    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: theme.spacing.lg,
                gap: theme.spacing.lg,
                backgroundColor: theme.colors.background
            }}
        >

            {/* Header */}
            <View style={{ gap: theme.spacing.xs }}>
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: theme.colors.text,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Componentes y diseños RKT_Dev
                </Text>
            </View>


            {/* Theme Switcher */}
            <View style={{ gap: theme.spacing.sm }}>
                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 16,
                        color: theme.colors.text
                    }}
                >
                    Theme
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        gap: theme.spacing.sm
                    }}
                >

                    {themes.map((item) => (
                        <Pressable
                            key={item.name}
                            onPress={() => setTheme(item.value)}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 16,
                                borderRadius: Number(theme.radius.md.replace("px", "")),
                                backgroundColor: theme.colors.surface,
                                borderWidth: 1,
                                borderColor: theme.colors.border
                            }}
                        >
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    fontWeight: "500"
                                }}
                            >
                                {item.name}
                            </Text>
                        </Pressable>
                    ))}

                </View>
            </View>


            {/* Navigation */}
            <View style={{ gap: theme.spacing.sm }}>

                <Link href="/components" asChild>
                    <Pressable
                        style={{
                            padding: theme.spacing.sm,
                            borderRadius: Number(theme.radius.md.replace("px", "")),
                            backgroundColor: theme.colors.primary
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "600" }}>
                            Components
                        </Text>
                    </Pressable>
                </Link>

                <Link href="/dashboard" asChild>
                    <Pressable
                        style={{
                            padding: theme.spacing.sm,
                            borderRadius: Number(theme.radius.md.replace("px", "")),
                            backgroundColor: theme.colors.primary
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "600" }}>
                            Dashboard
                        </Text>
                    </Pressable>
                </Link>

                <Link href="/social" asChild>
                    <Pressable
                        style={{
                            padding: theme.spacing.sm,
                            borderRadius: Number(theme.radius.md.replace("px", "")),
                            backgroundColor: theme.colors.primary
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "600" }}>
                            Social
                        </Text>
                    </Pressable>
                </Link>

                <Link href="/gallery" asChild>
                    <Pressable
                        style={{
                            padding: theme.spacing.sm,
                            borderRadius: Number(theme.radius.md.replace("px", "")),
                            backgroundColor: theme.colors.primary
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "600" }}>
                            Component Gallery
                        </Text>
                    </Pressable>
                </Link>

            </View>

        </View>
    )
}