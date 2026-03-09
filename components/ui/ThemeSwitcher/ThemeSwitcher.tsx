import React from "react"
import { Pressable, Text, View } from "react-native"
import { useTheme } from "../../../themes/ThemeProvider"

export default function ThemeSwitcher() {

    const { setTheme, lightTheme, darkTheme, customTheme } = useTheme()

    return (

        <View
            style={{
                flexDirection: "row",
                gap: 10,
                marginBottom: 20
            }}
        >

            <Pressable
                onPress={() => setTheme(lightTheme)}
                style={{
                    padding: 10,
                    backgroundColor: "#e5e7eb",
                    borderRadius: 8
                }}
            >
                <Text>Light</Text>
            </Pressable>

            <Pressable
                onPress={() => setTheme(darkTheme)}
                style={{
                    padding: 10,
                    backgroundColor: "#111827"
                }}
            >
                <Text style={{ color: "#fff" }}>Dark</Text>
            </Pressable>

            <Pressable
                onPress={() => setTheme(customTheme)}
                style={{
                    padding: 10,
                    backgroundColor: "#f59e0b",
                    borderRadius: 8
                }}
            >
                <Text>Custom</Text>
            </Pressable>

        </View>

    )

}