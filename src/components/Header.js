import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";

const Header = () => {
  return <View style={styles.header} />;
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#B388EB", // Lilás
    padding: 40,
  },
});

export default Header;
