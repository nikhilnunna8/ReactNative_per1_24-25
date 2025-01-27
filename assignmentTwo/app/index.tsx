import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Cars Info</Text>
      
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  background: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
