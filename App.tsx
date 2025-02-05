import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello World!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
