import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PeopleListItem from "./PeopleListItem.js";

const PeopleList = (props) => {
  const { peoples } = props;
  const items = peoples.map((people) => {
    const uniqueKey = people.name.first + people.name.last;
    return <PeopleListItem key={uniqueKey} people={people} />;
  });

  return <View style={styles.container}>{items}</View>;
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff",
  },
});
