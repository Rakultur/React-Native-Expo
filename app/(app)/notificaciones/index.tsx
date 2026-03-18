import { Text, View } from "react-native";
import { useTheme } from "../../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function NotificacionesScreen() {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notificaciones</Text>
        </View>
    );
}