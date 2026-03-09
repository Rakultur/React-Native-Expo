import React from "react"
import { Text, View } from "react-native"
import { useTheme } from "../../../themes/ThemeProvider"

export default function PostCard() {

    const { theme } = useTheme()

    return (

        <View
            style={{
                padding: 20,
                backgroundColor: theme.card,
                borderRadius: 10
            }}
        >

            <Text style={{ color: theme.text }}>
                PostCard Component
            </Text>

        </View>

    )

}