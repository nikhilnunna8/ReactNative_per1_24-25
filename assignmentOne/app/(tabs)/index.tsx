import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.mainContainer}>
      {/* Red Container */}
      <View style={styles.redContainer}></View>

      {/* Blue Container */}
      <View style={styles.blueContainer}>
        <View>
          {/* Purple Circle 1 and green box*/}
          <View style={styles.rowContainer}>
            <Text style={styles.purpleCircle1}> 1 </Text> <View style={styles.greensquarebold}></View>
          </View>
          {/* Purple Circle 2 and orange box*/}
          <View style={styles.rowContainer}>
            <Text style={styles.purpleCircle2}> 2 </Text> <View style={styles.orangesquarebold}></View>
          </View>
        </View>
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
    alignItems: "flex-start",
  },
  purpleCircle1: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    alignContent: "center",
    padding: 10,
    borderRadius: 25, //half of height width is a circle
    borderColor: "black",
    borderWidth: 2,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  greensquarebold: {
    height: 50,
    width: 100,
    backgroundColor: "green",
    alignContent: "center",
    padding: 10,
    borderColor: "darkgreen",
    borderWidth: 2,
    marginLeft: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center", 
    marginBottom: 15,
  },
  purpleCircle2: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    alignContent: "center",
    padding: 10,
    borderRadius: 25, //half of height width is a circle
    borderColor: "Green",
    borderWidth: 3,
    fontSize: 22,
    color: "green",
    fontWeight: "bold",
  },
  orangesquarebold: {
    height: 50,
    width: 100,
    backgroundColor: "orange",
    alignContent: "center",
    padding: 10,
    borderColor: "red",
    borderWidth: 2,
    marginLeft: 20,
  },
});