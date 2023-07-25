import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Header from '../Head';
import {useNavigation} from '@react-navigation/native';
const Dathang = () => {
  const navigation = useNavigation();
  const [img, setImg] = useState(require('./dathang/anh1.jpg'));
  const changeImage = (image: any) => {
    setImg(image);
  };
  const [count, setCount] = useState(1);
  const gia = 25000;
  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };
  const tongGia = count * gia;
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Text style={styles.title}>Oatmeal cookies</Text>
      <View>
        <Image source={img} style={styles.image} />

        <View style={styles.thumbnailContainer}>
          <TouchableOpacity
            onPress={() => changeImage(require('./dathang/anh2.png'))}>
            <Image
              source={require('./dathang/anh2.png')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(require('./dathang/anh3.jpg'))}>
            <Image
              source={require('./dathang/anh3.jpg')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(require('./dathang/anh4.jpg'))}>
            <Image
              source={require('./dathang/anh4.jpg')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '700'}}>
            Aioli. Arugula, spinach gorgonzola, cheese, carrots, quinoa, beets
          </Text>
        </View>
        <View style={styles.soluong}>
          <TouchableOpacity onPress={onDecrease} style={styles.btnSL}>
            <Text style={[styles.textSL1, {fontSize: 28, color: '#fff'}]}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textSL, {fontSize: 25, color: '#000'}]}>
            {count}
          </Text>
          <TouchableOpacity onPress={onIncrease} style={styles.btnSL}>
            <Text style={[styles.textSL1, {fontSize: 28, color: '#fff'}]}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.giaban}>
          <Text style={styles.txtgia}>{tongGia} vnd</Text>
          <TouchableOpacity
            style={styles.btngia}
            onPress={() =>
              Alert.alert('Đặt hàng thành công', 'My Alert Msg', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Product'),
                  style: 'default',
                },
              ])
            }>
            <Text style={{fontSize: 30, color: '#fff'}}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dathang;
