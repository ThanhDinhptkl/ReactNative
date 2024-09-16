import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Bai1a")}
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

// Screen Bai1a
function Bai1aScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("./image/Ellipse8.png")} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#D1F1F6",
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
          backgroundColor: "#D1F1F6",
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
          backgroundColor: "#E5F4F5",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "#E3C000", padding: 20, borderRadius: 9 }}
          onPress={() => navigation.navigate("Bai1b")}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#E3C000", padding: 20, borderRadius: 9 }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#37D6F8",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>HOW WE WORK?</Text>
      </View>
    </>
  );
}

// Screen Bai1b
function Bai1bScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("./image/Group.png")} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>FORGOT</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>PASSWORD</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Provide your account’s email for which you
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          want to reset your password
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#C4C4C4",
            width: 300,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("./image/mail-2935365 1.png")}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <TextInput
            style={{
              height: 40,
              flex: 1,
            }}
            placeholder="Email"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#E5F4F5",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E3C000",
            padding: 20,
            borderRadius: 9,
            width: 300,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Bai1c")}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>NEXT</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#37D6F8",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      ></View>
    </>
  );
}

// Screen Bai1c
function Bai1cScreen({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 75, fontWeight: "bold" }}>CODE</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>VERIFICATION</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#D1F1F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Enter ontime password sent on
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>++849092605798</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#D1F1F6",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#C4C4C4",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
              marginHorizontal: 2,
            }}
          >
            <TextInput
              style={{
                height: 40,
                width: 40,
                textAlign: "center",
              }}
              maxLength={1}
              keyboardType="numeric"
            />
          </View>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#E5F4F5",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E3C000",
            padding: 20,
            borderRadius: 9,
            width: 300,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#37D6F8",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      ></View>
    </>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bai1a" component={Bai1aScreen} />
        <Stack.Screen name="Bai1b" component={Bai1bScreen} />
        <Stack.Screen name="Bai1c" component={Bai1cScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
