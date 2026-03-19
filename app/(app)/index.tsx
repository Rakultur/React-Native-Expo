import { ScrollView, Text } from "react-native";
import MatchesToday from "../../components/Api_Futbol/MatchesToday";
import { useTheme } from "../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function InicioScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    /* Contenido principal para el Home del app */
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Partidos recientes</Text>
      <MatchesToday />
    </ScrollView>
  );
}
