import { ScrollView, Text } from "react-native";
import MatchesToday from "../../components/Api_Futbol/MatchesToday";
import { useTheme } from "../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function InicioScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    /*
        <View style={styles.container}>

        </View>
    */
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Partidos recientes</Text>
      <MatchesToday />
    </ScrollView>
  );
}
