import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Meal } from "../types/meal.type";
import { useNavigation } from "@react-navigation/native";

interface MealItemProps {
  item: Meal;
}

const MealItem = ({ item }: MealItemProps) => {
  const navigation = useNavigation<any>();

  const handleSelectMealItem = () => {
    navigation.navigate("MealDetail", { mealId: item.id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={handleSelectMealItem}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  detailItem: {
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
