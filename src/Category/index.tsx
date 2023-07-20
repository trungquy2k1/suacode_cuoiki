import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const data = [
  {
    id: '1',
    title: 'Cookies',
    title1: '12 recipes',
    image: require('./sp/list1.jpg'),
  },
  {
    id: '2',
    title: 'Mexican Food',
    title1: '12 recipes',
    image: require('./sp/banh6.jpg'),
  },
  {
    id: '3',
    title: 'Italia Food',
    title1: '9 recipes',
    image: require('./sp/banh4.jpg'),
  },
  {
    id: '4',
    title: '1206 Market St',
    title1: '12 recipes',
    image: require('./sp/anh2.png'),
  },
];

export function Category() {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('Product'); // replace 'Product' with the name of your Product screen
  };
  const renderItem = ({item}) => (
    <View style={styles.anh1}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={item.image} style={styles.itemImage} />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text1}>{item.title1}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          fontWeight: '700',
          color: '#000',
          marginBottom: 10,
        }}>
        Category
      </Text>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
