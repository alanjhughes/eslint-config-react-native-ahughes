import React from "react";
import { StyleSheet, Text, View } from "react-native";

const white = "#fff";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
};

export default App;
