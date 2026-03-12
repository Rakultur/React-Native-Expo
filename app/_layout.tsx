import { Stack } from "expo-router";
import React from "react";
import { ThemeProvider } from "../themes/ThemeProvider";

export default function RootLayout() {
    return (
        <ThemeProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </ThemeProvider>
    );
}