import { Text, Image } from "react-native";
import { Button } from "react-native-elements";
import CustomCard from "../UI/CustomCard";

const HomeScreen = ({ navigation }) => {
  // const ButtonHandler = () => {
  //   navigation.navigate("Full")
  // };

  return (
    <CustomCard>
      <Image source={require("../assets/images/label.gif")} />
      <Text
        style={{
          fontFamily: "IBM-regular",
          paddingHorizontal: 40,
          marginBottom: 20,
          fontSize: 15,
        }}
      >
        Majo Almeyra
      </Text>
      <Button
        title="Empezar"
        style={{
          fontFamily: "IBM-regular",
          paddingHorizontal: 40,
          marginBottom: 20,
          fontSize: 15,
        }}
        onPress={() => navigation.navigate("FullIndexScreen")}
      />
    </CustomCard>
  );
};

export default HomeScreen;
