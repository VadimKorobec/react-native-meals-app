import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryCridTile";

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => <CategoryGridTile {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
