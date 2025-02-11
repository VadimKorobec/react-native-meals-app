import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types/stack.type";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

type MealsOverviewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;

type MealsOverviewScreenRouteProp = RouteProp<
  RootStackParamList,
  "MealsOverview"
>;

type Props = {
  navigation: MealsOverviewScreenNavigationProp;
  route: MealsOverviewScreenRouteProp;
};

const MealsOverviewScreen = ({ route, navigation }: Props) => {
  const catId = route.params.categoryId;

  const meals = MEALS.filter((item) => item.categoryIds.includes(catId));

  useEffect(() => {
    const category = CATEGORIES.find((item) => item.id === catId);

    if (category) {
      navigation.setOptions({
        title: category.title,
      });
    }
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={({ item }) => <MealItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E6D5B8",
  },
});
