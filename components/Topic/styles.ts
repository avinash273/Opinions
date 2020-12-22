import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    opinionPicker: {
        paddingLeft: 140,
        alignItems: "center",
        textAlign: 'center',
    },
    container: {
        width: '110%',
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 20
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "85%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 20,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },

});

export default styles;