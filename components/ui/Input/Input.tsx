import { useMemo, useState } from "react";
import {
    Text,
    TextInput,
    View
} from "react-native";
import { useTheme } from "../../../themes/ThemeProvider";
import { createStyles } from "./styles";
import { InputProps } from "./types";

export function Input({
    label,
    error,
    disabled = false,
    ...props
}: InputProps) {
    const { theme } = useTheme();

    const [isFocused, setIsFocused] = useState(false);

    const styles = useMemo(
        () => createStyles(theme, isFocused, !!error, disabled),
        [theme, isFocused, error, disabled]
    );

    return (
        <View style={styles.container}>
            {/* LABEL */}
            {label && <Text style={styles.label}>{label}</Text>}

            {/* INPUT */}
            <TextInput
                {...props}
                editable={!disabled}
                style={styles.input}
                placeholderTextColor={theme.colors.textMuted}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {/* ERROR */}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}