import {Screen} from '../components/Screen';
import {Text} from '../components/Text';

import {gql, useQuery} from '@apollo/client';
import ItemCardSearch from '../components/ItemCardSearch';
import {View} from '../components/View';
import {TextInput} from '../components/TextInput';
import {Button} from '../components/Button';
import {useState} from 'react';
import {Spacer} from '../components/Spacer';
import {IconButton} from '../components/IconButton';
import {constants as C} from '../style/constants';

const SearchScreen = ({route}: any) => {
  const {orderBy, first, skip, searchText} = route.params;
  const [searchText2, setSearchText2] = useState<string>(searchText);
  const [searchTextTemp, setSearchTextTemp] = useState<string>(searchText);
  const GET_SEARCH_ITEMS = gql`
      query GetSearchItems {
        items(orderBy: ${orderBy}, first: ${first}, skip: ${skip}, where: {_search: "${searchText2}"}) {
          id
          name
          brand
          ratingAverage
          ratingCount
          discount
          images(first: 1) {
            id
            url
          }
          stocks(first: 1, orderBy: pricing_ASC) {
            pricing
          }
        }
      }
    `;
  const {data: searchItems, loading: searchItemsLoading} =
    useQuery(GET_SEARCH_ITEMS);

  const searchOutfit = () => {};

  return (
    <Screen showsVerticalScrollIndicator={false}>
      <View paddingLarge>
        <View flexDirectionRow style={{width: '100%'}}>
          <View style={{flex: 0.7}}>
            <TextInput
              placeholder="Casual Dress"
              onChangeText={text => setSearchTextTemp(text)}
              value={searchTextTemp}
              onKeyPress={(key: any) => {
                key.code === 'Enter' && setSearchText2(searchTextTemp);
              }}
            />
          </View>
          <View paddingHorizontalMedium style={{flex: 0.3}}>
            <Button
              title="Search"
              onPress={searchOutfit}
              onPressIn={() => setSearchText2(searchTextTemp)}
            />
          </View>
        </View>
        <View flexDirectionRow>
          {/* <Button outline title="Filter" flex /> */}
          <IconButton
            outline
            iconName="funnel-outline"
            title="Filter"
            flex
            iconColor={C.colorPrimary}
          />
          <Spacer />
          {/* <Button outline title="Sort" flex /> */}
          <IconButton
            outline
            iconName="filter"
            title="Sort"
            flex
            iconColor={C.colorPrimary}
          />
        </View>
        <Spacer large />
        {searchItemsLoading && <Text>Searching</Text>}
        {searchItems?.items?.map((item: any) => (
          <ItemCardSearch item={item} />
        ))}
      </View>
    </Screen>
  );
};

export default SearchScreen;
