import { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Input } from "../../../components/ui/Input/Input";
import { useTheme } from "../../../themes/ThemeProvider";
import { createStyles } from "./styles";

export default function PublicarScreen() {
    const { theme } = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    const [query, setQuery] = useState("");
    const [matches, setMatches] = useState<any[]>([]);
    const [filtered, setFiltered] = useState<any[]>([]);

    // 🔌 Fetch API
    useEffect(() => {
        fetch("https://www.scorebat.com/video-api/")
            .then((res) => res.json())
            .then(setMatches)
            .catch(console.error);
    }, []);

    // 🔎 Filtro por búsqueda
    useEffect(() => {
        if (!query) {
            setFiltered([]);
            return;
        }

        const results = matches.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        setFiltered(results);
    }, [query, matches]);

    return (
        <View style={styles.container}>
            <Input
                label="Buscar partido"
                placeholder="Ej: Barcelona vs Real Madrid"
                value={query}
                onChangeText={setQuery}
            />

            <FlatList
                data={filtered}
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