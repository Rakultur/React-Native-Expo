import { Link, usePathname, type Href } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./style";

type MenuItem = {
  label: string;
  href: Href;
};

export default function NavigationBar() {
  const pathname = usePathname();

  const menu: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <View style={styles.sidebar}>
      <Text style={styles.logo}>MyApp</Text>

      {menu.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            style={active ? styles.itemActive : styles.item}
          >
            <Text style={active ? styles.textActive : styles.text}>
              {item.label}
            </Text>
          </Link>
        );
      })}
    </View>
  );
}
