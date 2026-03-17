import { ScrollView, Text, View } from "react-native";
import { useTheme } from "../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function Home() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>
          Bienvenido a tu app con soporte de temas
        </Text>

        {/* Card de ejemplo */}
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Este componente responde al tema activo
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}