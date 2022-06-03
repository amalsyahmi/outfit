import * as React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '../../components/Text';

export const WelcomeScreen = () => {
  return (
    <View>
      <View>
        <Image
          source={require('../../assets/images/ads.png')}
          style={{width: '100vw', height: '70vh'}}
        />
        <Text
          colorLight
          weightExtraBold
          // sizeExtraLarge
          style={{position: 'absolute', bottom: 120, left: 10, fontSize: 50}}>
          Fashion
        </Text>
        <Text
          colorLight
          weightExtraBold
          // sizeExtraLarge
          style={{position: 'absolute', bottom: 70, left: 10, fontSize: 50}}>
          Sales
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 15,
            left: 10,
            backgroundColor: 'red',
            paddingVertical: 5,
            paddingHorizontal: 50,
            borderRadius: 20,
          }}>
          <Text colorLight weightBold>
            Check
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text alignCenter sizeLarge>
        by Amal Syahmi
      </Text> */}
    </View>
  );
};
