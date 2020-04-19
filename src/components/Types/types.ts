import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
    name: string;
    info: string;
    tag: Array<string>;
    src: string;
  };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

export type Props = {
  route: ProfileScreenRouteProp;
  navigation: StackNavigationProp<RootStackParamList>;
};
