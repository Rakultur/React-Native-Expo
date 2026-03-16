import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import NavigationBar from "../../components/navigation/NavigationBar";

export default function AppLayout() {
  return (
    <View style={styles.container}>
      <NavigationBar />

      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },

  content: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 24,
  },
});
