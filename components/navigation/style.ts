import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sidebar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38389d",
  },

  logo: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 40,
  },

  item: {
    paddingVertical: 12,
    marginBottom: 8,
  },

  itemActive: {
    paddingVertical: 12,
    marginBottom: 8,
    backgroundColor: "#343454",
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  text: {
    color: "#b8b8d4",
    fontSize: 16,
  },

  textActive: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
