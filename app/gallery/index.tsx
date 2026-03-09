import React from "react"
import { ScrollView, Text, View } from "react-native"

import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher"
import { loadComponents } from "../../utils/loadComponents"

const components = loadComponents()

export default function Gallery() {

    return (



        <ScrollView>

            <ThemeSwitcher />

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 20
                }}
            ></View>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 20
                }}
            >

                {components.map((item, index) => {

                    const Component = item.component

                    return (

                        <View
                            key={index}
                            style={{
                                width: 200,
                                margin: 10,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 10
                            }}
                        >

                            <Text
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: 10
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