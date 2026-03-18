import { Link, usePathname } from "expo-router";
import {
  Bell,
  House,
  MonitorCog,
  PlusSquare,
  Search,
  Trophy,
  User,
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

  // 🔥 Config centralizada
  const navItems: { path: AppRoute; icon: any }[] = [
    { path: "/", icon: House },
    { path: "/buscar", icon: Search },
    { path: "/publicar", icon: PlusSquare },
    { path: "/torneos", icon: Trophy },
    { path: "/notificaciones", icon: Bell },
    { path: "/perfil", icon: User },
  ];

  const isActive = (href: string) => pathname.startsWith(href);
  return (
    <View style={styles.container}>

      {!isMobile && <Text style={styles.title}>MyApp</Text>}

      <View style={styles.itemsContainer}>
        {navItems.map(({ path, icon: Icon }) => {
          const active = isActive(path);

          return (
            <Link key={path} href={path} asChild>
              <Pressable style={active ? styles.activeItem : styles.item}>
                <Icon
                  size={28}
                  color={
                    active
                      ? theme.colors.secondary
                      : theme.colors.secondaryForeground
                  }
                />
              </Pressable>
            </Link>
          );
        })}


        <Link href="/settings" asChild>
          <Pressable
            style={
              isActive("/settings") ? styles.activeItem : styles.item
            }
          >
            <MonitorCog
              size={28}
              color={
                isActive("/settings")
                  ? theme.colors.secondary
                  : theme.colors.secondaryForeground
              }
            />
          </Pressable>
        </Link>

        {/* THEME SWITCHER (solo desktop) */}
        {!isMobile && <ThemeSwitcher />}
      </View>
    </View>
  );
}