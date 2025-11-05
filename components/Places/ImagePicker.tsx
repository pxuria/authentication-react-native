import { Colors } from '@/constants/styles';
import { launchCameraAsync, PermissionStatus, useCameraPermissions } from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../ui/OutlinedButton';

const ImagePicker = () => {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState<string | null>(null);

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
        if (image.assets) {
            setImage(image.assets[0].uri);
        }
    }

    let imagePreview = <Text>No Image Taken Yet!</Text>;

    if (image) {
        imagePreview = <Image style={styles.image} source={{ uri: image }} />;
    }

    return (
        <View>
            <View style={styles.imgPreview}>{imagePreview}</View>

            <OutlinedButton icon="camera" onPress={imageHandler}>Take Image</OutlinedButton>
        </View>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
    imgPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});