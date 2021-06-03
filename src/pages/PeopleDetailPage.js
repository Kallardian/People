import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class PeopleDetailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: people.picture.large }} />
        <View style={styles.detailContainer}>
          <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>Email: </Text>
            <Text style={[styles.cell, styles.content]}> {people.email} </Text>
          </View>
        </View>
      </View>
    );
  }
}

/*
  As propriedades da direita sobrescrevem as propriedades da esquerda.
  style = { [{prop1}, {prop2}] } <= A prop2 sobrescreve a prop1
*/
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 200,
  },
  detailContainer: {
    backgroundColor: "#e2f9ff",
    marginTop: 20,
    elevation: 1,
  },
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
