import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Meal } from "../types/meal.type";

interface MealItemProps {
  item: Meal;
}

const MealItem = ({ item }: MealItemProps) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
