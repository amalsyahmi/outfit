import {Image} from 'react-native';
import {TouchableOpacity} from './TouchableOpacity';
import {constants as C} from '../style/constants';
import {View} from './View';
import Icon from 'react-native-vector-icons/Ionicons';
import {Spacer} from './Spacer';
import {Text} from './Text';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ItemCardHome = ({item}: any) => {
  return (
    <View style={{paddingRight: C.spacingLarge}}>
      <TouchableOpacity
        style={{
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowColor: C.colorBlack,
          borderRadius: 10,
        }}>
        <View>
          {item?.images[0] ? (
            <Image
              key={item?.images[0].id}
              source={item?.images[0].url}
              style={{
                width: 148,
                height: 184,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          ) : (
            <Skeleton width={148} height={184} duration={1} />
          )}
          <View paddingMedium>
            <View flex flexDirectionRow>
              <Icon
                name={
                  item?.ratingAverage >= 1
                    ? 'star-sharp'
                    : item?.ratingAverage >= 0.5
                    ? 'star-half-sharp'
                    : 'star-outline'
                }
                size={14}
                color={C.colorHot}
              />
              <Icon
                name={
                  item?.ratingAverage >= 2
                    ? 'star-sharp'
                    : item?.ratingAverage >= 1.5
                    ? 'star-half-sharp'
                    : 'star-outline'
                }
                size={14}
                color={C.colorHot}
              />
              <Icon
                name={
                  item?.ratingAverage >= 3
                    ? 'star-sharp'
                    : item?.ratingAverage >= 2.5
                    ? 'star-half-sharp'
                    : 'star-outline'
                }
                size={14}
                color={C.colorHot}
              />
              <Icon
                name={
                  item?.ratingAverage >= 4
                    ? 'star-sharp'
                    : item?.ratingAverage >= 3.5
                    ? 'star-half-sharp'
                    : 'star-outline'
                }
                size={14}
                color={C.colorHot}
              />
              <Icon
                name={
                  item?.ratingAverage === 5
                    ? 'star-sharp'
                    : item?.ratingAverage >= 4.5
                    ? 'star-half-sharp'
                    : 'star-outline'
                }
                size={14}
                color={C.colorHot}
              />
              <Spacer small />
              <Text sizeSmall colorGray>
                ({item?.ratingCount ? item?.ratingCount : 0})
              </Text>
            </View>
            <Spacer />
            <Text sizeExtraSmall colorGray>
              {item?.brand}
            </Text>
            <Text weightSemiBold>{item?.name}</Text>
            <View flex flexDirectionRow>
              {item?.stocks[0].pricing ? (
                item?.discount || item?.discount === 0 ? (
                  <>
                    <Text lineThrough colorGray sizeExtraSmall weightSemiBold>
                      RM{item?.stocks[0].pricing}
                    </Text>
                    <Spacer extraSmall />
                    <Text colorHot sizeSmall weightSemiBold>
                      RM
                      {(
                        ((100 - item?.discount) / 100) *
                        item?.stocks[0].pricing
                      ).toFixed(2)}
                    </Text>
                  </>
                ) : (
                  <>
                    <Text sizeSmall weightSemiBold>
                      RM{item?.stocks[0].pricing}
                    </Text>
                  </>
                )
              ) : (
                <Skeleton width={100} height={15} duration={1} />
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCardHome;
