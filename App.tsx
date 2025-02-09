import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#b89a7d" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: "Meals",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
