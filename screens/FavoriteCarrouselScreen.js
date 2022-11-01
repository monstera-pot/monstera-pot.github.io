import PoemPageDisplay from "../components/PoemPageDisplay";

const FavoriteCarrouselScreen = ({ route, navigation }) => {
  const favPoem = route.params.poem;
  return <PoemPageDisplay item={favPoem} />;
};

export default FavoriteCarrouselScreen;
