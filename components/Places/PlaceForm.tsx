import { Colors } from "@/constants/styles";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
    const [title, setTitle] = useState('');

    function changeTitle(text: string) {
        setTitle(text);
    }

    return (
        <ScrollView style={styles.form}>
            <View >
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitle} value={title} />
            </View>

            <ImagePicker />
            <LocationPicker />
        </ScrollView>
    )
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary700,
        backgroundColor: Colors.primary100,
        borderRadius: 8
    },
});