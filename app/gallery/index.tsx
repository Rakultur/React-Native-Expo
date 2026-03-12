import { useTheme } from "@/themes/ThemeProvider";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { loadComponents } from "../../utils/loadComponents";
import { createGalleryStyles } from "./styles";

const components = loadComponents();

export default function Gallery() {
    const { theme } = useTheme();

    const styles = createGalleryStyles(theme);

    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={{ paddingBottom: theme.spacing.xl }}
        >
            <View style={styles.container}>
                {components.map((item, index) => {
                    const Component = item.component;

                    return (
                        <View key={index} style={styles.cardContainer}>
                            <Text style={styles.cardTitle}>{item.name}</Text>

                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={styles.horizontalScroll}
                                contentContainerStyle={styles.horizontalContent}
                            >
                                <View style={styles.componentsContainer}>
                                    <Component />
                                </View>
                            </ScrollView>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}