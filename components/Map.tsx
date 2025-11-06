import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import IconButton from "./ui/IconButton";

const Map = ({ navigation }) => {
    const [location, setLocation] = useState({
        lat: '',
        lng: ''
    });
    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    function selectLocation(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setLocation({ lat, lng });
    }

    const saveLocation = useCallback(() => {
        if (!location) {
            Alert.alert('No location picked!', 'You have to pick a location');
            return;
        }

        navigation.navigate('AddPlace', { lat: location.lat, lng: location.lng });
    }, [location, navigation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton icon="save" size={24} color={tintColor} onPress={saveLocation} />
        });
    }, [navigation, saveLocation])

    return (
        <MapView style={styles.map} initialRegion={region} onPress={selectLocation}>
            {location && <Marker
                title="Picked Location"
                coordinate={{ latitude: location.lat, longitude: location.lng }} />}
        </MapView>
    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});