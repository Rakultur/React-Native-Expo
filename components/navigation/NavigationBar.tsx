import { Link, usePathname } from "expo-router";
import { House, MonitorCog, UserPen } from "lucide-react";
import { Text, View, useWindowDimensions } from "react-native";
import { useTheme } from "../../themes/ThemeProvider";
import { ThemeSwitcher } from "../ui/ThemeSwitcher/ThemeSwitcher";
import { createStyles } from "./style";


export default function NavigationBar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const styles = createStyles(theme, isMobile);

  const isActive = (href: string) => pathname === href;

  return (
    <View style={styles.sidebar}>
      {!isMobile && <Text style={styles.title}>MyApp</Text>}

      <View style={styles.itemsContainer}>
        <View style={isActive("/") ? styles.activeItem : undefined}>
          <Link href="/">
            <House
              color={
                isActive("/")
                  ? theme.colors.secondary
                  : theme.colors.secondaryForeground
              }
              size={28}
            />
          </Link>
        </View>

        <View style={isActive("/profile") ? styles.activeItem : undefined}>
          <Link href="/profile">
            <UserPen
              color={
                isActive("/profile")
                  ? theme.colors.secondary
                  : theme.colors.secondaryForeground
              }
              size={28}
            />
          </Link>
        </View>

        <View style={isActive("/settings") ? styles.activeItem : undefined}>
          <Link href="/settings">
            <MonitorCog
              color={
                isActive("/settings")
                  ? theme.colors.secondary
                  : theme.colors.secondaryForeground
              }
              size={28}
            />
          </Link>
        </View>

        {/* Solo mostrar switch en desktop o ponerlo como icono */}
        {!isMobile && <ThemeSwitcher />}
      </View>
    </View>
  );
}