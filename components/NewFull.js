import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
import { ListItem, Icon, Avatar, Button } from "react-native-elements";
import { POEMS } from "../shared/POEMS";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
import { makeBookmark } from "../features/bookmark/bookmarksSlice";
import CustomCard from "../UI/CustomCard";
import * as Animatable from "react-native-animatable";
import PoemPageDisplay from "./PoemPageDisplay";
import TitlePageDisplay from "./TitlePageDisplay";
import PoemCardScreen from "../screens/PoemCardScreen";
//import { titles } from "../shared/PoemsSlice";
import { useRef, useState, useEffect } from "react";
import FirstPage from "../screens/FirstPageScreen";

const NewFull = ({ initialPage }) => {
  const ref = useRef(null);
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const [index, setIndex] = useState(initialPage);
  console.log("index is" + index);

  //When index changes: we get the Ref + scroll to certain index
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: false,
    });
  }, [index]);

  const renderItem = ({ item }) => {
    if (item.page === 1) {
      //   return <FirstPage item={item} />;
      // } else if (item.page === 1) {
      return (
        <View style={styles.FlatListContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            type="outline"
            titleStyle={styles.buttonTitleStyle}
            title="Horas que"
            onPress={() => {
              setIndex(2);
            }}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            type="outline"
            titleStyle={styles.buttonTitleStyle}
            title="Círculos"
            onPress={() => {
              setIndex(6);
            }}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            type="outline"
            titleStyle={styles.buttonTitleStyle}
            title="Días que"
            onPress={() => {
              setIndex(9);
            }}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            type="outline"
            titleStyle={styles.buttonTitleStyle}
            title="Rombos"
            onPress={() => {
              setIndex(12);
            }}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            type="outline"
            titleStyle={styles.buttonTitleStyle}
            title="My Bookmark"
            icon={{
              name: "bookmark-o",
              type: "font-awesome",
              color: "#000",
              paddingHorizontal: 10,
            }}
            onPress={() => {
              setIndex(bookmarkedPage);
            }}
          ></Button>
        </View>
      );
    } else if (item.esTitulo) {
      return <TitlePageDisplay item={item} />;
    } else {
      return <PoemPageDisplay item={item} />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        pagingEnabled
        horizontal
        disableIntervalMomentum
        snapToAlignment="start"
        data={POEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.page}
        style={styles.FlatListContainer}
        ref={ref}
        initialNumToRender={12}
        initialScrollIndex={index}
        showsHorizontalScrollIndicator
        getItemLayout={(POEMS, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("screen").length,
  },
  textview: {
    flex: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  viewtitulo: {
    backgroundColor: "#000",
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: Dimensions.get("screen").length,
  },
  FlatListContainer: {
    marginVertical: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").length,
    flex: 0.8,
  },
  text: {
    paddingHorizontal: "15%",
    paddingVertical: "15%",
    fontFamily: "IBM-regular",
  },
  titulo: {
    paddingTop: "10%",
    paddingHorizontal: "15%",
    color: "#fff",
    fontSize: 20,
    fontFamily: "IBM-italic",
  },
  poemicons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  buttonStyle: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 15,
    margin: 5,
  },
  buttonTitleStyle: {
    color: "#000",
    fontFamily: "IBM-italic",
  },
  // indexButton: {
  //   color: "#fff",
  //   marginBottom: 0,
  // },
});

export default NewFull;
