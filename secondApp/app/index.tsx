import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View>
      <View style={styles.container}>
        <View><Text>1</Text></View>
        <View><Text>2</Text></View>
        <View><Text>3</Text></View>
      </View>
      <View style={styles.containergreen}>
        <View><Text>1</Text></View>
        <View><Text>2</Text></View>
        <View><Text>3</Text></View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //fills whole space or ratio to other elements
    padding: 150,
    margin: 40,
    marginBottom: 5,
    backgroundColor: "gray",
    flexDirection: "row",
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
  bodycontainer: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    marginTop: 10,
    justifyContent: "center",
    margin: 10,
    borderRadius: 25, //half of height width is a circle
    borderColor: "green",
    borderWidth: 2,

  },
  containergreen: {
    flex: 3, //fills whole space or ratio to other elements
    padding: 150,
    margin: 40,
    backgroundColor: "darkgreen",
    flexDirection: "row",
    alignItems: "center", // other direction
  },
});
