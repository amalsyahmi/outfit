import {TouchableOpacity} from './TouchableOpacity';
import {constants as C} from '../style/constants';
import {View} from './View';

const ItemCardHome = () => {
  return (
    <View style={{paddingRight: C.spacingLarge}}>
      <TouchableOpacity
        style={{
          height: 200,
          width: 150,
          backgroundColor: C.colorGray,
          borderRadius: 10,
        }}></TouchableOpacity>
    </View>
  );
};

export default ItemCardHome;
