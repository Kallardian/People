import React from "react";
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";

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
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get("https://randomuser.me/api/?nat=br&results=150")
        .then((response) => {
          const { results } = response.data; // destruct, ele vai procurar um campo results dentro de response.data
          this.setState({
            //overwriting o state inicial
            peoples: results,
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({ error: true, loading: false });
        });
    }, 2500);
  }
  // Essa função pdoeria ser RenderPage pra retornar tudo aqui invés daquele
  // monte de operação ternária lá em baixo

  // renderLoading() {
  //   if (this.state.loading) {
  //     return <ActivityIndicator size="large" color="3c8be6" />;
  //   }
  //   null;
  // }

  render() {
    // this.props.navigation.navigate(/* Chave da página */, /* state */)
    // this.props.navigation.navigate("PeopleDetail");
    return (
      <View style={styles.container}>
        {/* {this.renderLoading()} */}
        {this.state.loading ? (
          <ActivityIndicator size="large" color="3c8be6" />
        ) : this.state.error ? (
          <Text style={styles.error}> Ops... Algo Deu Errado</Text>
        ) : (
          <PeopleList
            peoples={this.state.peoples}
            onPressItem={(pageParams) => {
              this.props.navigation.navigate("PeopleDetail", pageParams);
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    color: "red",
    alignSelf: "center",
    fontSize: 18,
  },
});
