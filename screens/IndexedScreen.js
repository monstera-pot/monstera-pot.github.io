import NewFull from "../components/NewFull";
import { Text } from "react-native";

const IndexedScreen = ({ route, navigation }) => {
  const initialPage = route.params.initialPage;
  return <NewFull initialPage={initialPage} />;
};

export default IndexedScreen;
