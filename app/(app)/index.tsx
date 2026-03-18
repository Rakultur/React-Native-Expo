import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useTheme } from "../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function InicioScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/")
      .then(res => res.json())
      .then(setMatches)
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidos recientes</Text>

      <FlatList
        data={matches}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.match}>{item.title}</Text>
            <Text style={styles.league}>{item.competition}</Text>
          </View>
        )}
      />
    </View>
  );
}