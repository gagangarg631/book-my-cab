import {
    View,
    TextInput,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import STDButton from "./STDButton";

const ChooseLocation = ({ navigation }) => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    return (
        <View style={styles.location}>
            <View style={{ height: "30%", width: "80%", gap: 20 }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter pickup address"
                    onChange={(item) => setSource(item.target.value)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter destination"
                    onChange={(item) => setDestination(item.target.value)}
                />
                <STDButton value="Next" onPress={() => {
                    if (source.trim() !== "" && destination.trim() !== "") {
                        navigation.navigate("CHOOSECAB", {
                            source,
                            destination
                        });
                    }
                }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    location: {
        borderWidth: 1,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        height: "80px",
        width: "100%",
        fontSize: "20px",
        flex: 1,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: "10px",
    },
});

export default ChooseLocation;
