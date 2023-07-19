import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
const images = [
  {
    id: '1',
    source: require('./sp/anh1.jpg'),
    title: 'Vegan Cookies',
    title1: '$2,950,000',
  },
  {
    id: '2',
    source: require('./sp/anh3.jpg'),
    title: 'Pumpkin Spice Cookies',
    title1: '$2,950,000',
  },
  {
    id: '3',
    source: require('./sp/anh4.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '4',
    source: require('./sp/banh2.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '5',
    source: require('./sp/banh3.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '6',
    source: require('./sp/banh4.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '7',
    source: require('./sp/banh5.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '8',
    source: require('./sp/banh6.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '9',
    source: require('./sp/banh2.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '10',
    source: require('./sp/banh3.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '11',
    source: require('./sp/anh4.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '12',
    source: require('./sp/banh2.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
];

const Product = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };
  //

  const renderItem = ({item}) => (
    <View style={styles.anh1}>
      <Image source={item.source} style={{width: 180, height: 120}} />
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
        Product
      </Text>
      <FlatList
        data={images.slice(0, isExpanded ? images.length : 2)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: '##4f8af4',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', padding: 10, fontSize: 16}}>
          {isExpanded
            ? `Thu gọn - ${images.length} ảnh`
            : `Mở rộng + ${images.length} ảnh`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
