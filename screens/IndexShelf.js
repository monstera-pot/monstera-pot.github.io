import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import { useSelector } from "react-redux";

const IndexShelf = ({ route, navigation }) => {
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.FlatListContainer}>
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Horas que"
          onPress={() => {
            navigation.navigate("IndexedScreen", {
              initialPage: 2,
            });
          }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Círculos"
          onPress={() => {
            navigation.navigate("IndexedScreen", {
              initialPage: 6,
            });
          }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Días que"
          onPress={() => {
            navigation.navigate("IndexedScreen", {
              initialPage: 9,
            });
          }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Rombos"
          onPress={() => {
            navigation.navigate("IndexedScreen", {
              initialPage: 12,
            });
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
            navigation.navigate("Microdosis", {
              index: bookmarkedPage,
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FlatListContainer: {
    marginVertical: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").length,
    flex: 0.8,
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
});

export default IndexShelf;
