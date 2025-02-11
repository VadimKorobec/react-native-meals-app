import { Platform, StyleSheet, View } from "react-native";

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default List;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "white",
    marginBottom: 16,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
