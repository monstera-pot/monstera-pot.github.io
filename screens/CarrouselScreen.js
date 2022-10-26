import Carrousel from "../components/Carrousel";
import { POEMS } from "../shared/POEMS";

const CarrouselScreen = ({ navigation }) => {
  return <Carrousel poem={POEMS} />;
};

export default CarrouselScreen;
