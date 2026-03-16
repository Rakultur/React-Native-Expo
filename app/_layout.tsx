import { Slot } from "expo-router";
import { ThemeProvider } from "../themes/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
