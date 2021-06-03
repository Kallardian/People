import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Line = ({ label, content }) => {
  return (
    <View style={styles.line}>
      <Text style={[styles.cell, styles.label]}>{label} </Text>
      <Text style={[styles.cell, styles.content]}> {content} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: "bold",
  },
  content: {},
});

export default Line;
