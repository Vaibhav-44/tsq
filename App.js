import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AstroSr from "./home_2";

export default function App() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navbar}>
        <View style={styles.ongo}>
          <Text style={styles.Text}>{" Ongoing Sessions"}</Text>
        </View>

        <View>
          <Text 
          onPress={() => {
            Navigation.navigate(AstroSr);
          }}
          style={{ color: "grey", fontSize: 18, fontWeight: "bold" }}>
            {"For Astrologers  "}
          </Text>
        </View>
      </View>
      <View style={styles.hr}></View>
      <View style={[styles.list, styles.shadow]}>
        <Image style={styles.img} source={require("./assets/img1.jpg")} />
        <View style={{ alignSelf: "center", width: 170 }}>
          <Text style={styles.text1}>Astrologer 1</Text>
          <Text style={styles.text2}>Vastu</Text>
          <Text style={styles.text2}>Experience</Text>
          <Text style={styles.text2}>Charges</Text>
          <Text style={styles.text2}>Rating</Text>
        </View>
        <View style={styles.thirdwheel}><Text>{">"}</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3ece3",
    alignItems: "center",
  },
  navbar: {
    width: "90%",
    height: 60,
    backgroundColor: "#d3d3d3",
    marginTop: 60,
    borderRadius: 22,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ongo: {
    height: 40,
    width: "50%",
    backgroundColor: "#302cb9",
    borderRadius: 35,
    alignItems: "center",
    textAlignVertical: "center",
    verticalAlign: "middle",
    alignContent: "center",
    justifyContent: "center",

  },
  Text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  list: {
    width: "90%",
    height: 130,
    backgroundColor: "rgba(255 ,201 ,119, 0.7)",
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  img: {
    height: 130,
    width: 120,
    borderRadius: 20,
  },
  text1: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
  },
  text2: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
    marginLeft: 10,
  },
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  hr: {
    width: "95%",
    height: 0.8,
    backgroundColor:"grey",

  },
  thirdwheel: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    right: 0,
    width: 30
  }
});
