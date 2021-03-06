import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {TextInput} from './TextInput';
import {constants as C} from '../style/constants';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <TextInput
      onChangeText={e => {
        setSearchValue(e);
      }}
      value={searchValue}
      placeholder="Sport Dress"
      // leftComponent={() => (
      //   <Icon name="search" size={24} color={C.colorGray} />
      // )}
    />
  );
};

export default SearchBar;
