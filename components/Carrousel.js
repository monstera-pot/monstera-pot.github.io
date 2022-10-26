import { Dimensions, FlatList, SafeAreaView } from "react-native";
import { POEMS } from "../shared/POEMS";
import PoemPageDisplay from "./PoemPageDisplay";
import TitlePageDisplay from "./TitlePageDisplay";

const Carrousel = ({ item }) => {
  const renderItem = ({ item }) => {
    if (item.esTitulo) {
      return <TitlePageDisplay item={item} />;
    } else {
      return <PoemPageDisplay item={item} />;
    }
  };

  return (
    <FlatList
      data={POEMS}
      renderItem={renderItem}
      keyExtractor={(item) => item.page}
      pagingEnabled
      horizontal
    />
  );
};

export default Carrousel;
