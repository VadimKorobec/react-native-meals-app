import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  pressed: boolean;
  onPress: () => void;
}
const IconButton = ({ onPress, pressed }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color={pressed ? "gold" : "white"} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
