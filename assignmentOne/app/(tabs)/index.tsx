import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.mainContainer}>
      {/* Red Container */}
      <View style={styles.redContainer}></View>

      {/* Blue Container */}
      <View style={styles.blueContainer}>
        {/* Purple Circle 1 */}
        <Text> 1 </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 8,
    marginBottom: 20,
    backgroundColor: "white",
  },
  redContainer: {
    flex: 1,
    padding: 15,
    margin: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  blueContainer: {
    flex: 1,
    padding: 15,
    margin: 20,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  purpleCircle1: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    justifyContent: "center",
    padding: 10,
    borderRadius: 25, //half of height width is a circle
    borderColor: "black",
    borderWidth: 2,
  },
});