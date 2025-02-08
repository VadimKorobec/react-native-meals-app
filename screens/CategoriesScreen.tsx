import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }: any) => {
  const handlePress = (id: string) => {
    navigation.navigate("MealsOverview", {
      categoryId: id,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile {...item} onPress={handlePress} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
