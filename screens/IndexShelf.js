import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
import { Icon, Button } from "react-native-elements";

const IndexShelf = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.FlatListContainer}>
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Horas que"
          // onPress={() => {
          //   setIndex(1);
          // }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Círculos"
          // onPress={() => {
          //   setIndex(5);
          // }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Días que"
          // onPress={() => {
          //   setIndex(5);
          // }}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.buttonTitleStyle}
          title="Rombos"
          // onPress={() => {
          //   setIndex(11);
          // }}
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
          // onPress={() => {
          //   setIndex(bookmarkedPage);
          // }}
        ></Button>
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
