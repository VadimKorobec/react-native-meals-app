import { FlatList, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/stack.type";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

type CategoriesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MealsCategories"
>;

type Props = {
  navigation: CategoriesScreenNavigationProp;
};

const CategoriesScreen = ({ navigation }: Props) => {
  const handlePress = (id: string) => {
    navigation.navigate("MealsOverview", {
      categoryId: id,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryGridTile {...item} onPress={handlePress} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6D5B8",
  },
});
