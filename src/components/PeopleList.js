import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import PeopleListItem from "./PeopleListItem.js";

const PeopleList = (props) => {
  const { peoples, onPressItem } = props;
  return (
    <FlatList
      style={styles.container}
      data={peoples}
      renderItem={({ item }) => (
        <PeopleListItem people={item} navigateToPeopleDetail={onPressItem} />
      )}
      keyExtractor={(item) => item.login.username}
    />
  );
};
export default PeopleList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff",
  },
});
