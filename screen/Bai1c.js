import React from "react";

export default function Bai1c() {
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
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            ++849092605798
          </Text>
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              VERIFY CODE
            </Text>
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
}
