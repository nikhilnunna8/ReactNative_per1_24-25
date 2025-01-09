import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Open app/index.tsx</Text>
      <Text style={styles.textbody}>Hi</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    margin: 20,
    backgroundColor: "orange",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textbody: {
    fontSize: 18,

  },
});
