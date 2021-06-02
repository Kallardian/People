import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PeoplePage from "./src/pages/PeoplePage";
import PeopleDetailPage from "./src/pages/PeopleDetailPage";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage,
    },
    PeopleDetail: {
      screen: PeopleDetailPage,
      //possivelmente sera defaultNavigationOptions quando eu atualizar
      // fazer o title ser uma funçãoq ue retorna objeto é bom pra acessar dados da página chamada
      navigationOptions: ({ navigation }) => {
        const peopleName = navigation.state.params.people.name.first;
        return {
          title: peopleName,
          //sobrescrevendo as regras que foram passadas ali em baixo
          headerTitleStyle: {
            color: "white",
            fontSize: 30,
          },
        };
      },
    },
  },
  {
    //opções de navegação global
    defaultNavigationOptions: {
      title: "Pessoas",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#3c8be6",
        borderBottomWidth: 2,
        borderBottomColor: "#c0c0c0",
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 30,
        flexGrow: 1, //ocupe todo espaço que você puder
        textAlign: "center",
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
