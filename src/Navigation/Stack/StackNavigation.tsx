import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../../Pages/Main";
import { NavigationContainer } from "@react-navigation/native";
import ISCREENS from "../IScreen";
import LogIn from "../../Pages/LogIn";
function StackNavigation() {
const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName={ISCREENS.MainScreen} screenOptions={{headerShown:false}}>
        <Stack.Screen name={ISCREENS.MainScreen} component={MainPage} />
        <Stack.Screen name={ISCREENS.LogIn} component={LogIn} />
      </Stack.Navigator>
  );
}

export default StackNavigation;