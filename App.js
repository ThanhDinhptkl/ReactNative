import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: "#00CCF9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("./image/Ellipse8.png")} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#00CCF9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>GROW</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>YOUR BUSINESS</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#00CCF9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          We will help you to grow your business using
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>online server</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#00CCF9",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "#E3C000", padding: 20, borderRadius: 9 }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#E3C000", padding: 20, borderRadius: 9 }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
