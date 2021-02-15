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
        height: '91%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    userHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        padding: 10,
        top: 50,
    },
    userNames: {
        marginLeft: 10,
    },
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
    buttonContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        flexDirection: 'row'
    }
});

export default styles;