import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        backgroundColor: " red"
    },
    button: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
        marginTop: 5,
    },
    widgetContent: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    }
});
