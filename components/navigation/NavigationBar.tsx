import { Link, usePathname } from "expo-router";
import {
  House,
  PlusSquare,
  Search
} from "lucide-react-native";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { useTheme } from "../../themes/ThemeProvider";
import { ThemeSwitcher } from "../ui/ThemeSwitcher/ThemeSwitcher";
import { createStyles } from "./style";
import { AppRoute } from "./types";

export default function NavigationBar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const isMobile = width < 768;
  const styles = createStyles(theme, isMobile);

  const navItems: { path: AppRoute; icon: React.ComponentType<any> }[] = [
    { path: "/", icon: House },
    { path: "/buscar", icon: Search },
    { path: "/publicar", icon: PlusSquare },
    /*{ path: "/torneos", icon: Trophy },
    { path: "/notificaciones", icon: Bell },
    { path: "/perfil", icon: User },*/
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>MyApp</Text>
      {/* Menu principal del app */}
      <View style={styles.ContainerMenu}>
        {navItems.map(({ path, icon: Icon }) => {
          const active = isActive(path);
          return (
            <Link key={path} href={path} asChild>
              <Pressable
                style={active ? styles.activeItem : styles.item}
                // Feedback Visual
                android_ripple={{ color: theme.colors.interaction.pressed }}
              >
                <Icon
                  size={28}
                  color={
                    active ? theme.colors.primary : theme.colors.textSecondary
                  }
                />
                {!isMobile && (
                  <Text
                    style={active ? styles.activeItemText : styles.itemText}
                  >
                    {path.split("/")[1] || "Home"}
                  </Text>
                )}
              </Pressable>
            </Link>
          );
        })}
      </View>
      <ThemeSwitcher />
    </View>
  );
}
