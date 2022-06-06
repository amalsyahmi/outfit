import {Image, ScrollView} from 'react-native';
import {Button} from '../components/Button';
import ItemCardHome from '../components/ItemCardHome';
import {Screen} from '../components/Screen';
import {Spacer} from '../components/Spacer';
import {Text} from '../components/Text';
import {TextInput} from '../components/TextInput';
import {View} from '../components/View';
import {constants as C} from '../style/constants';

const HomeScreen = () => {
  return (
    <Screen showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View>
        <Image
          source={require('../assets/images/ads2.png')}
          style={{width: '100%', height: 200 * (C.windowWidth / 350)}}
        />
        <View paddingHorizontalLarge absoluteBottomLeft style={{width: '100%'}}>
          <Text
            colorWhite
            sizeLarge
            weightSemiBold
            style={{
              textShadowColor: C.colorBlack,
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10,
            }}>
            Street Clothes
          </Text>
          <Spacer />
          <View flex flexDirectionRow style={{width: '100%'}}>
            <View style={{flex: 0.7}}>
              <TextInput placeholder="Casual Dress" />
            </View>
            <View paddingHorizontalMedium style={{flex: 0.3}}>
              <Button title="Search" />
            </View>
          </View>
        </View>
      </View>

      {/* Body */}
      <View paddingHorizontalLarge>
        <View>
          <Spacer large />
          <Text sizeExtraLarge weightSemiBold>
            Sales
          </Text>
          <Text sizeSmall colorGray>
            Super summer sales
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ItemCardHome />
            <ItemCardHome />
            <ItemCardHome />
            <ItemCardHome />
            <ItemCardHome />
          </ScrollView>
        </View>
        <View>
          <Spacer large />
          <Text sizeExtraLarge weightSemiBold>
            Super HOT
          </Text>
          <Text sizeSmall colorGray>
            You've never seen it before!
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ItemCardHome />
            <ItemCardHome />
            <ItemCardHome />
            <ItemCardHome />
            <ItemCardHome />
          </ScrollView>
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;
