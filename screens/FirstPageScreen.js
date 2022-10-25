import { View, Text } from "react-native";
import CustomCard from "../UI/CustomCard";

const FirstPage = () => {
  return (
    <CustomCard>
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
          margin: "auto",
          alignItems: "right",
        }}
      >
        <Text>Incomodate a diario</Text>
      </View>
    </CustomCard>
  );
};

export default FirstPage;
