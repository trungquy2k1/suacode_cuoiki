import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.anhdaidien}>
        <Text style={styles.title}>Profile</Text>
        <Image source={require('./Img/anhprofile.png')} style={styles.image} />
        <Text style={styles.title}>Ahihi</Text>
        {/* </View>
      <View> */}
        <TouchableOpacity
          // onPress={()=>navigation.navigate('Login')}
          onPress={() =>
            Alert.alert('Bạn muốn Log out', 'My Alert Msg', [
              {text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => navigation.navigate('Landing'),
                style: 'default',
              },
            ])
          }
          style={styles.btn}>
          <Text style={styles.txtlogout}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vande}>
        <Text style={styles.txtvd}>Bạn gặp vấn đề gì??</Text>
        <TextInput
          placeholder="Để lại vấn đề bạn gặp phải ở đây..."
          style={styles.txtinput}
          placeholderTextColor="black"
          // multiline={true}
          // numberOfLines={8}
        />
        <TouchableOpacity
          style={styles.btngui}
          onPress={() => Alert.alert('Cảm ơn bạn đã chia sẻ')}>
          <Text style={styles.txtlogout}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;