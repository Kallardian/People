import React from "react";
import { Text, View } from "react-native";

import PeopleList from "../components/PeopleList";

import axios from "axios";
/*
  Vai chamar o render()
  Depois que renderizar, ele chama o componentDidMount()
  E aí dentro do CDM a gente coloca o Axios
  E aí mudamos o state, que vai fazer renderizar de novo
  E agora com as pessoas já salvas no State
*/

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=20")
      .then((response) => {
        const { results } = response.data; // destruct, ele vai procurar um campo results dentro de response.data
        this.setState({
          //overwriting o state inicial
          peoples: results,
        });
      });
  }

  render() {
    // this.props.navigation.navigate(/* Chave da página */, /* state */)
    // this.props.navigation.navigate("PeopleDetail");
    return (
      <View>
        <PeopleList
          peoples={this.state.peoples}
          onPressItem={(pageParams) => {
            this.props.navigation.navigate("PeopleDetail", pageParams);
          }}
        />
      </View>
    );
  }
}
