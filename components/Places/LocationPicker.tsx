import { Colors } from '@/constants/styles';
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location';
import { Alert, StyleSheet, View } from 'react-native';
import OutlinedButton from './../ui/OutlinedButton';

const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
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
    }

    function pickOnMap() { }

    return (
        <View>
            <View style={styles.mapPreview}></View>
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
    }
});