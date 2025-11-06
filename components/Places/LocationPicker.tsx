import { Colors } from '@/constants/styles';
import { getMapPreview } from '@/util/location';
import { useNavigation } from '@react-navigation/native';
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from './../ui/OutlinedButton';

const LocationPicker = () => {
    const [location, setLocation] = useState<{ lat: number; lng: number }>();
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    const navigation = useNavigation();

    async function verifyPermissions() {
        if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
            const permissionRes = await requestPermission();
            return permissionRes.granted;
        }

        if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficent Permissions!', 'You need to grant location permissions to use this app.');

            return false;
        }

        return true;
    }

    async function getLocation() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const location = await getCurrentPositionAsync({

        });
        console.log(location)
        setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
    }

    function pickOnMap() {
        navigation.navigate('Map');
    }

    let locationPreview = <Text>No location chosen.</Text>;
    if (location) {
        locationPreview = <Image source={{ uri: getMapPreview(location.lat.toString(), location.lng.toString()) }} />
    }
    return (
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon='location' onPress={getLocation}>Locate User</OutlinedButton>
                <OutlinedButton icon='map' onPress={pickOnMap}>Pick on Map</OutlinedButton>
            </View>
        </View>
    )
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    mapPreviewImage: {
        width: '100%',
        height: '100%'
    }
});