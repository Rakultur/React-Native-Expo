import { Link } from "expo-router"
import React from "react"
import { Pressable, Text, View } from "react-native"

export default function Home() {

    const themes = ["Light", "Dark", "System"]

    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                padding: 30,
                gap: 40
            }}
        >

            {/* Header */}
            <View style={{ gap: 6 }}>
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: "bold"
                    }}
                >
                    Componentes y diseños RKT_Dev
                </Text>
            </View>


            {/* Theme Switcher */}
            <View style={{ gap: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                    Theme
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        gap: 10
                    }}
                >

                    {themes.map((theme) => (
                        <Pressable
                            key={theme}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 16,
                                borderRadius: 8,
                                backgroundColor: "#e5e7eb"
                            }}
                        >
                            <Text>{theme}</Text>
                        </Pressable>
                    ))}

                </View>
            </View>


            {/* Navigation */}
            <View style={{ gap: 15 }}>

                <Link href="/components" asChild>
                    <Pressable style={card("#222222")}>
                        <Text style={cardText}>Components</Text>
                    </Pressable>
                </Link>

                <Link href="/dashboard" asChild>
                    <Pressable style={card("#222222")}>
                        <Text style={cardText}>Dashboard</Text>
                    </Pressable>
                </Link>

                <Link href="/social" asChild>
                    <Pressable style={card("#222222")}>
                        <Text style={cardText}>Social</Text>
                    </Pressable>
                </Link>

                <Link href="/gallery" asChild>
                    <Pressable style={card("#222222")}>
                        <Text style={cardText}>Component Gallery</Text>
                    </Pressable>
                </Link>

            </View>

        </View>
    )
}


const card = (color: string) => ({
    padding: 18,
    borderRadius: 12,
    backgroundColor: color,
})

const cardText = {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
}