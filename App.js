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
    },
  },
  {
    defaultNavigationOptions: {
      title: "Pessoas",
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
