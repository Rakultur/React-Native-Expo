export const routes = [
    "/",
    "/buscar",
    "/publicar",
    "/torneos",
    "/notificaciones",
    "/perfil",
    "/settings",
] as const;

// 🔥 Tipo automático (NO duplicas strings)
export type AppRoute = (typeof routes)[number];

// 🔥 Tipo para navegación (opcional pero útil)
export type NavItem = {
    path: AppRoute;
    icon: any; // puedes refinar esto luego
};