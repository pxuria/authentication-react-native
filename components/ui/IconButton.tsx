import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  onPress: () => void;
}


function IconButton({ icon, color, size, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
