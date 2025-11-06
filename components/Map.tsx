import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
    const [location, setLocation] = useState(null);
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