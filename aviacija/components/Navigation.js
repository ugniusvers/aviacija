import { createStackNavigator, createAppContainer } from "react-navigation";
import ResultScreen from "../Screens/ResultScreen";
import ScannerScreen from "../Screens/ScannerScreen";
import HomeScreen from "../Screens/HomeSceen";

const RootStack = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen
    },
    Result: {
      screen: ResultScreen
    },
    Home: {
        screen: HomeScreen
      }
  },
  {
    initialRouteName: "Home" //Default screen name
  }
);

export default createAppContainer(RootStack);
