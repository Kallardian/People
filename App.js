import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import axios from "axios";
/*
  Vai chamar o render()
  Depois que renderizar, ele chama o componentDidMount()
  E aí dentro do CDM a gente coloca o Axios
  E aí mudamos o state, que vai fazer renderizar de novo
  E agora com as pessoas já salvas no State
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then((response) => {
        const { results } = response.data; // destruct, ele vai procurar um campo results dentro de response.data
        this.setState({
          //overwriting o state inicial
          peoples: results,
        });
      });
  }

  renderList() {
    const textElements = this.state.peoples.map((people) => {
      const { first } = people.name;
      return <Text key={first}>{first}</Text>;
    });

    return textElements;
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
