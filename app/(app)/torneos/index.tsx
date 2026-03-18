import { Text, View } from "react-native";
import { Theme } from "../../../themes/types";
import { createStyles } from "./styles";

export default function TorneosScreen({ theme }: { theme: Theme }) {
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Torneos</Text>
        </View>
    );
}