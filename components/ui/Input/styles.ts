import { StyleSheet } from "react-native";
import { Theme } from "../../../themes/types";

export const createStyles = (
    theme: Theme,
    isFocused: boolean,
    hasError: boolean,
    disabled: boolean
) =>
    StyleSheet.create({
        container: {
            marginBottom: theme.spacingValues.md,
        },

        label: {
            color: theme.colors.text,
            fontSize: theme.typography.fontSize.sm,
            marginBottom: theme.spacingValues.xs,
        },

        input: {
            height: theme.components.input.height,
            borderRadius: theme.components.input.borderRadius,
            paddingHorizontal: theme.components.input.paddingHorizontal,
            backgroundColor: disabled
                ? theme.colors.backgroundDisabled
                : theme.colors.inputBackground,

            borderWidth: theme.borders.width.thin,
            borderColor: hasError
                ? theme.colors.error
                : isFocused
                    ? theme.colors.primary
                    : theme.colors.inputBorder,

            color: disabled
                ? theme.colors.textDisabled
                : theme.colors.text,

            fontSize: theme.components.input.fontSize,
        },

        error: {
            color: theme.colors.error,
            fontSize: theme.typography.fontSize.xs,
            marginTop: theme.spacingValues.xs,
        },
    });