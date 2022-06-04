import SearchBar from '../components/SearchBar';
import {Spacer} from '../components/Spacer';
import {View} from '../components/View';

const HomeScreen = () => {
  return (
    <View>
      <View paddingHorizontalLarge>
        <Spacer extraLarge />
        <SearchBar />
      </View>
    </View>
  );
};

export default HomeScreen;
