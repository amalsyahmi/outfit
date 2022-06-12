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
import {Modal} from '../components/ModalProvider';
import {StyleSheet} from 'react-native';
import {CheckBox} from '../components/Checkbox';
import {TouchableOpacity} from '../components/TouchableOpacity';
import Icon from 'react-native-vector-icons/Ionicons';

const useStyle = () => {
  return StyleSheet.create({
    modalBackground: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    modal: {
      backgroundColor: 'white',
      height: 'auto',
      marginHorizontal: 50,
      borderRadius: 10,
      padding: 20,
    },
  });
};

const SearchScreen = ({route}: any) => {
  const {orderBy, first, skip, searchText} = route.params;
  const s = useStyle();
  const [searchText2, setSearchText2] = useState<string>(searchText);
  const [searchTextTemp, setSearchTextTemp] = useState<string>(searchText);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);
  const [brandFilter, setBrandFilter] = useState<string>('');
  const [sortOption, setSortOption] = useState<
    | null
    | 'name_ASC'
    | 'name_DESC'
    | 'brand_ASC'
    | 'brand_DESC'
    | 'ratingAverage_ASC'
    | 'ratingAverage_DESC'
  >(orderBy);
  const [starFilter, setStarFilter] = useState<number>(0);

  const GET_SEARCH_ITEMS = gql`
      query GetSearchItems {
        items(orderBy: ${sortOption}, first: ${first}, skip: ${skip}, where: {_search: "${searchText2}", brand_contains: "${brandFilter}", ratingAverage_gte: ${starFilter}}) {
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
              onPress={() => setSearchText2(searchTextTemp)}
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
            onPress={() => setOpenFilterModal(true)}
          />
          <Spacer />
          {/* <Button outline title="Sort" flex /> */}
          <IconButton
            outline
            iconName="filter"
            title="Sort"
            flex
            iconColor={C.colorPrimary}
            onPress={() => setOpenSortModal(true)}
          />
        </View>
        <Spacer large />
        {searchItemsLoading && <Text>Searching</Text>}
        {searchItems?.items?.map((item: any) => (
          <ItemCardSearch item={item} key={item.id} />
        ))}
      </View>
      {openFilterModal && (
        <Modal>
          <View style={s.modalBackground}>
            <View style={s.modal}>
              <Text weightBold>Filter</Text>
              <Spacer />
              <Text sizeSmall weightSemiBold>
                By category
              </Text>
              <View flexDirectionRow>
                <CheckBox
                  checked={brandFilter === 'Mango'}
                  onChange={() =>
                    setBrandFilter(brandFilter === 'Mango' ? '' : 'Mango')
                  }
                />
                <Text>Mango</Text>
              </View>
              <View flexDirectionRow>
                <CheckBox
                  checked={brandFilter === 'Dorothy Perkins'}
                  onChange={() =>
                    setBrandFilter(
                      brandFilter === 'Dorothy Perkins'
                        ? ''
                        : 'Dorothy Perkins',
                    )
                  }
                />
                <Text>Dorothy Perkins</Text>
              </View>
              <Spacer large />
              <Text sizeSmall weightSemiBold>
                Rating
              </Text>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    starFilter === 5 ? C.colorDarkGray : C.colorWhite,
                  borderRadius: 10,
                }}
                onPress={() => setStarFilter(starFilter === 5 ? 0 : 5)}>
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
              </TouchableOpacity>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    starFilter === 4 ? C.colorDarkGray : C.colorWhite,
                  borderRadius: 10,
                }}
                onPress={() => setStarFilter(starFilter === 4 ? 0 : 4)}>
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
              </TouchableOpacity>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    starFilter === 3 ? C.colorDarkGray : C.colorWhite,
                  borderRadius: 10,
                }}
                onPress={() => setStarFilter(starFilter === 3 ? 0 : 3)}>
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
              </TouchableOpacity>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    starFilter === 2 ? C.colorDarkGray : C.colorWhite,
                  borderRadius: 10,
                }}
                onPress={() => setStarFilter(starFilter === 2 ? 0 : 2)}>
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
              </TouchableOpacity>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    starFilter === 1 ? C.colorDarkGray : C.colorWhite,
                  borderRadius: 10,
                }}
                onPress={() => setStarFilter(starFilter === 1 ? 0 : 1)}>
                <Icon name="star-sharp" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
                <Icon name="star-outline" size={14} color={C.colorHot} />
              </TouchableOpacity>
              <Spacer large />
              <Button
                title="Apply Filter"
                onPress={() => {
                  setOpenFilterModal(false);
                  setSearchText2(searchTextTemp);
                }}
              />
            </View>
          </View>
        </Modal>
      )}
      {openSortModal && (
        <Modal>
          <View style={s.modalBackground}>
            <View style={s.modal}>
              <Text weightBold>Sort</Text>
              <Spacer />
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    sortOption === 'name_ASC' || sortOption === 'name_DESC'
                      ? C.colorDarkGray
                      : C.colorWhite,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                }}
                onPress={() =>
                  setSortOption(
                    sortOption === 'name_ASC'
                      ? 'name_DESC'
                      : sortOption === 'name_DESC'
                      ? null
                      : 'name_ASC',
                  )
                }>
                <Text>By name</Text>
                {sortOption === 'name_ASC' ? (
                  <Icon name="chevron-up" size={20} color={C.colorHot} />
                ) : sortOption === 'name_DESC' ? (
                  <Icon name="chevron-down" size={20} color={C.colorHot} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    sortOption === 'brand_ASC' || sortOption === 'brand_DESC'
                      ? C.colorDarkGray
                      : C.colorWhite,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                }}
                onPress={() =>
                  setSortOption(
                    sortOption === 'brand_ASC'
                      ? 'brand_DESC'
                      : sortOption === 'brand_DESC'
                      ? null
                      : 'brand_ASC',
                  )
                }>
                <Text>By brand</Text>
                {sortOption === 'brand_ASC' ? (
                  <Icon name="chevron-up" size={20} color={C.colorHot} />
                ) : sortOption === 'brand_DESC' ? (
                  <Icon name="chevron-down" size={20} color={C.colorHot} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                flexDirectionRow
                paddingHorizontalSmall
                paddingVerticalSmall
                style={{
                  backgroundColor:
                    sortOption === 'ratingAverage_ASC' ||
                    sortOption === 'ratingAverage_DESC'
                      ? C.colorDarkGray
                      : C.colorWhite,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                }}
                onPress={() =>
                  setSortOption(
                    sortOption === 'ratingAverage_ASC'
                      ? 'ratingAverage_DESC'
                      : sortOption === 'ratingAverage_DESC'
                      ? null
                      : 'ratingAverage_ASC',
                  )
                }>
                <Text>By rating</Text>
                {sortOption === 'ratingAverage_ASC' ? (
                  <Icon name="chevron-up" size={20} color={C.colorHot} />
                ) : sortOption === 'ratingAverage_DESC' ? (
                  <Icon name="chevron-down" size={20} color={C.colorHot} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <Spacer large />
              <Button
                title="Apply Sort"
                onPress={() => setOpenSortModal(false)}
              />
            </View>
          </View>
        </Modal>
      )}
    </Screen>
  );
};

export default SearchScreen;
