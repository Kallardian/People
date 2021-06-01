import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import axios from "axios";

// renderList(){
//   const names = ["Eddie Van Halen", "Jimi Hendrix", "Chimbinha", "Steve Val"];
// }

export default class App extends React.Component {
  renderList() {
    // const textNames = names.map((name) => {
    //   return <Text key={name}>{name}</Text>; //aqui no key, eu tenho que ter certeza que NÃO vai existir outra chave igual
    // });

    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then((response) => {
        const { results } = response.data; // destruct, ele vai procurar um campo results dentro de response.data
        const names = results.map((people) => {
          //fez um map pelo results pra pegar "people" e retornou o primeiro nome
          return people.name.first;
        });
        console.log(names);
      });

    // return textNames;
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
