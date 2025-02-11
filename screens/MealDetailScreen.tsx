import { useLayoutEffect, useState } from "react";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../types/stack.type";

import Subtitle from "../components/Subtitle";
import List from "../components/List";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { Meal } from "../types/meal.type";

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, "MealDetail">;

type MealDetailScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "MealDetail"
>;

const MealDetailScreen = () => {
  const [meals, setMeals] = useState<Meal[]>(MEALS);
  const [pressedIcon, setPressedIcon] = useState<boolean>(false);

  const route = useRoute<MealDetailScreenRouteProp>();
  const navigation = useNavigation<MealDetailScreenNavigationProp>();

  const meal = meals.find((item) => item.id === route.params.mealId);

  const handleToggleIcon = () => {
    setPressedIcon((prevState) => !prevState);
    setMeals((prevState) =>
      prevState.map((item) =>
        item.id === route.params.mealId
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      )
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <IconButton onPress={handleToggleIcon} pressed={pressedIcon} />
        </View>
      ),
    });
  }, [navigation, handleToggleIcon]);

  if (!meal) {
    return <Text>Sorry, meal not found.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      </View>
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{meal.duration}m</Text>
        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <View>
        <Subtitle>Ingredients</Subtitle>
        <List>
          {meal.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
        </List>
        <Subtitle>Steps</Subtitle>
        <List>
          {meal.steps.map((step) => (
            <Text key={step}>{step}</Text>
          ))}
        </List>
        {meal.isFavorite ? <Text>True</Text> : <Text>False</Text>}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6D5B8",
  },
  imageContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 10,
  },
  detailItem: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
