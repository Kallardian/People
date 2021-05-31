import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

// renderList(){
//   const names = ["Eddie Van Halen", "Jimi Hendrix", "Chimbinha", "Steve Val"];
// }

export default class App extends React.Component {
  renderList() {
    const names = ["Eddie Van Halen", "Jimi Hendrix", "Chimbinha", "Steve Val"];

    const textNames = names.map((name) => {
      return <Text>{name}</Text>;
    });

    return textNames;
  }

  render() {
    return (
      <View>
        <Header title="Pessoas" />
        {this.renderList()}
      </View>
    );
  }
}
