import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface CategoryGridTileProps {
  id: string;
  title: string;

  onPress: (id: string) => void;
}

const CategoryGridTile = ({
  id,
  title,

  onPress,
}: CategoryGridTileProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => onPress(id)}
      >
        <View style={[styles.innerContainer]}>
          <Image
            style={styles.images}
            source={require("../assets/images/foodiesfeed.com_healthy-food.jpg")}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  title: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
});
