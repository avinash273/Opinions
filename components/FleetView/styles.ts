import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#10498C',
        padding: 20,
    },
    text: {
        color: '#eaeaea',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    userHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
    },
    userNames: {},
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#efefef",
        marginVertical: 5,
    },
    username: {
        fontSize: 14,
        color: "#efefef",
    },
    time: {
        paddingLeft: 5,
        color: "#efefef",
        fontSize: 14,
    },
});

export default styles;