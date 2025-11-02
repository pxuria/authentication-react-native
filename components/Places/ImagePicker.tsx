import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker';
import { Alert, Button, View } from 'react-native';

const ImagePicker = () => {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
            const permissionRes = await requestPermission();
            return permissionRes.granted;
        }

        if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficent Permissions!', 'You need to grant camera permissions to use this app.');

            return false;
        }

        return true;
    }

    async function imageHandler() {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        console.log(image)
    }

    return (
        <View>
            <Button title='Take Image' onPress={imageHandler} />
        </View>
    )
}

export default ImagePicker;