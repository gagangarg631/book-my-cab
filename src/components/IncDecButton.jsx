import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const IncDecButton = ({ max=10, count, setCount }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.childs}
            onPress={() => setCount(prevCount => prevCount===1 ? prevCount : prevCount-1)}
            > 
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <View style={styles.counterBox}>
                <Text style={styles.counter}>{ count }</Text>
            </View>
            <TouchableOpacity 
            style={styles.childs}
            onPress={() => setCount(prevCount => prevCount===max ? prevCount : prevCount+1)}
            >
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
    },
    childs: {
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    },
    counterBox: {
        width: "33%",
        display: "flex",
        justifyContent: "center",
    },
    counter: {
        backgroundColor: "white",
        textAlign: "center",
        fontSize: 20,
    },
});

export default IncDecButton;
