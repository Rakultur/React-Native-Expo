import { View } from "react-native";
import { Input } from "../../../components/ui/Input/Input";
import { useTheme } from "../../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function PublicarScreen() {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Input />
        </View>
    );
}