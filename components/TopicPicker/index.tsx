import React, {useState} from "react";
import {StyleSheet, Text, View, Picker, TextInput} from "react-native";
import styles from "./styles";

const NewPicker = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [value, onChangeText] = React.useState('Admin add topic...');
    return (
        <View style={styles.opinionPicker}>

            {/*<TextInput*/}
            {/*    multiline={true}*/}
            {/*    numberOfLines={3}*/}
            {/*    style={styles.admin}*/}
            {/*    placeholder={"Add new topic.."}*/}
            {/*/>*/}


            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Election" value="java" />
                <Picker.Item label="Trump" value="j1" />
                <Picker.Item label="Biden" value="j2" />
                <Picker.Item label="COVID19" value="j3" />
                <Picker.Item label="Masks" value="j4" />
                <Picker.Item label="Christmas" value="j5" />
            </Picker>
        </View>
    );
}


export default NewPicker;