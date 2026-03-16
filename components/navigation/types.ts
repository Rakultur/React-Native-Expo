// components/types.ts
import { NavigationProp } from "@react-navigation/native";

// Define el tipo para un elemento de la barra de navegación
export type TabItem = {
  route: string;
  label: string;
  iconName: string;
  isPublish?: boolean;
  isProfile?: boolean;
};

// Define los tipos para las rutas de tu aplicación.
// Ajusta esto según las rutas reales de tu app.
// Si usas Expo Router, puedes tener tipos más específicos si es necesario.
type RootStackParamList = {
  "/home": undefined;
  "/profile": undefined;
  "/settings": undefined;
  // ... otras rutas
};

// Define el tipo para la navegación
export type AppNavigationProp = NavigationProp<RootStackParamList>;

// Define las props para el componente NavigationBar
export interface NavigationBarProps {
  navigation?: AppNavigationProp; // La prop 'navigation' es opcional si usas el hook
}
