import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.head} onPress={() => navigation.goBack()}>
      <Image source={require('../asset/iconback.png')} />
      <Text style={styles.txthead}>Back</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txthead: {
    fontSize: 20,
    color: '#000',
  },
});
export default Header;
