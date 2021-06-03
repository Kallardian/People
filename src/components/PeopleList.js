import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import PeopleListItem from "./PeopleListItem.js";

const PeopleList = (props) => {
  const { peoples, onPressItem } = props;
  const items = peoples.map((people) => {
    const uniqueKey = people.name.first + people.name.last;
    return (
      <PeopleListItem
        key={uniqueKey}
        people={people}
        navigateToPeopleDetail={onPressItem}
      />
    );
  });

  return <ScrollView style={styles.container}>{items}</ScrollView>;
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff",
  },
});
