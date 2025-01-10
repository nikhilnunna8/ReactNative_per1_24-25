import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ox</Text>
      <Text style={styles.textbody}>Hi</Text>
      <View style={styles.textbodycontainer}>
        <Text>A</Text>
      </View>
      <View style={styles.textbodycontainer}>
        <Text>B</Text>
      </View>
      <View style={styles.textbodycontainer}>
        <Text>C</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //fills whole space or ratio to other elements
    padding: 150,
    margin: 20,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "center", //main direction
    alignItems: "center", // other direction
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  textbody: {
    fontSize: 18
  },
  textbodycontainer: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
    marginTop: 10,
    justifyContent: "center",
    margin: 10,
    borderRadius: 25, //half of height width is a circle
    borderColor: "green",
    borderWidth: 2,

  },
});
