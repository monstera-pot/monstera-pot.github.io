import { View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "react-native-elements";

const IndexPage = ({ setIndex }) => {
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);

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
      />
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

export default IndexPage;
