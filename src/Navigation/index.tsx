import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Stack/StackNavigation";

export default function Navigation() {
    return (
      <NavigationContainer >
        <StackNavigation/>
      </NavigationContainer>
    );
  }