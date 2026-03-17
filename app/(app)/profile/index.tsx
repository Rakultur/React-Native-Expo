import { ScrollView, Text, View } from "react-native";

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            <View>
                <Text >Home</Text>
                <Text >
                    Bienvenido a tu app con soporte de temas
                </Text>

                {/* Card de ejemplo */}
                <View >
                    <Text >
                        Este componente responde al tema activo
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
