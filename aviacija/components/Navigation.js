import { createStackNavigator, createAppContainer } from "react-navigation";
import ResultScreen from "../Screens/ResultScreen";
import ScannerScreen from "../Screens/ScannerScreen";

const RootStack = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: "Scanner" //Default screen name
  }
);

export default createAppContainer(RootStack);
