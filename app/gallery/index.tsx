import React from "react"
import { ScrollView, Text, View } from "react-native"

import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher"
import { useTheme } from "@/themes/ThemeProvider"
import { loadComponents } from "../../utils/loadComponents"

const components = loadComponents()

export default function Gallery() {

    const { theme } = useTheme()

    return (

        <ScrollView
            style={{
                flex: 1,
                backgroundColor: theme.colors.background
            }}
            contentContainerStyle={{
                padding: theme.spacing.lg
            }}
        >

            <ThemeSwitcher />

            {/* Gallery Grid */}

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: Number(theme.spacing.md.replace("px", ""))
                }}
            >

                {components.map((item, index) => {

                    const Component = item.component

                    return (

                        <View
                            key={index}
                            style={{
                                width: 220,
                                padding: Number(theme.spacing.md.replace("px", "")),
                                borderWidth: 1,
                                borderColor: theme.colors.border,
                                borderRadius: Number(theme.radius.md.replace("px", "")),
                                backgroundColor: theme.colors.surface,
                                shadowColor: "#000",
                                shadowOpacity: 0.1,
                                shadowRadius: 6,
                                elevation: 3
                            }}
                        >

                            <Text
                                style={{
                                    fontWeight: "700",
                                    marginBottom: Number(theme.spacing.sm.replace("px", "")),
                                    color: theme.colors.text,
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: 16
                                }}
                            >
                                {item.name}
                            </Text>

                            <Component />

                        </View>

                    )

                })}

            </View>

        </ScrollView>

    )

}