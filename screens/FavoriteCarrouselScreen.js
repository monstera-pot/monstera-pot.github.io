import PoemPageDisplay from "../components/PoemPageDisplay";

const FavoriteCarrouselScreen = ({ route, navigation }) => {
  const favPoem = route.params.poem;
  console.log("FavPoem is " + favPoem);
  return <PoemPageDisplay item={favPoem} />;
};

export default FavoriteCarrouselScreen;
