import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from "react-native";

interface Props {
    icon: string;
    size?: number;
    color?: string;
    onPress(): void;
}

const IconButton = ({ icon, size, color, onPress }: Props) => {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})