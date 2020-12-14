import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        right: 25,
        bottom: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;