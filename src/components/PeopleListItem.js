import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const PeopleListItem = (props) => {
  const { people } = props;
  const { first, last, title } = people.name;
  return (
    <View style={styles.line}>
      <Image
        style={styles.avatar}
        source={{
          uri: people.picture.thumbnail,
        }}
      />
      <Text style={styles.lineText}>{`${title} ${first} ${last}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: "center",
    flexDirection: "row",
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },
  avatar: {
    aspectRatio: 1, //mantenha as proporções da imagem REACT
    flex: 1,
    marginLeft: 15,
    borderRadius: 40,
  },
});

export default PeopleListItem;
