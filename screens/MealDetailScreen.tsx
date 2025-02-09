import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/stack.type";

import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, "MealDetail">;

const MealDetailScreen = () => {
  const route = useRoute<MealDetailScreenRouteProp>();

  const meal = MEALS.find((item) => item.id === route.params.mealId);

  if (!meal) {
    return <Text>Sorry, meal not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{meal.duration}m</Text>
        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <View>
        <Text>Ingredients</Text>
        {meal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {meal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#E6D5B8",
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
});
