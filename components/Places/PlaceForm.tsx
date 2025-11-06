import { Colors } from "@/constants/styles";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../ui/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState<{ lat: string; lng: string }>();

    function changeTitle(text: string) {
        setTitle(text);
    }

    function savePlace() {

    }

    function takeImage(img: string) {
        setImage(img);
    }

    function takeLocation(location: { lat: string; lng: string }) {
        setLocation(location);
    }

    return (
        <ScrollView style={styles.form}>
            <View >
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitle} value={title} />
            </View>

            <ImagePicker onImageTaken={takeImage} />
            <LocationPicker onLocationTaken={takeLocation} />

            <Button onPress={savePlace}>Add Place</Button>
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