import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  // useEffect(() => {
  //   Alert.alert(
  //     'Thông báo',
  //     'Ứng dụng muốn truy cập vào vị trí của bạn',
  //     [
  //       {
  //         text: "Don't Allow",
  //         onPress: () => console.log("Don't Allow Pressed"),
  //         style: 'cancel',
  //       },
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     {cancelable: false},
  //   );
  // }, [6]);

  const handleLogin = () => {
    if (username === '') {
      setUsernameError('Vui lòng điền thông tin');
    } else {
      setUsernameError('');
    }

    if (pass === '') {
      setPasswordError('Vui lòng điền thông tin');
    } else {
      setPasswordError('');
    }

    if (username !== '' && pass !== '') {
      setError('');
      Alert.alert(`Chào mừng ${username} đăng nhập`);

      navigation.navigate('Home');
    } else {
      setError('Vui lòng điền đủ thông tin agggggggg');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}> Welcome Login </Text>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập "
          placeholderTextColor="black"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <Text style={{color: 'red'}}>{usernameError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="black"
          value={pass}
          onChangeText={text => setPass(text)}
          secureTextEntry
        />
        <Text style={{color: 'red'}}>{passwordError}</Text>
        {/* <Text style={{color: 'red', alignSelf: 'center'}}>{error}</Text> */}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={styles.tex1}>OR</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
            Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>
            Google
          </Text>
        </TouchableOpacity>
        <View style={styles.chuyenlogout}>
          <Text style={{color: '#000', fontSize: 18}}>
            Bạn chưa có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: 'blue', fontSize: 18, marginLeft: 8}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaff80',
  },
  container: {
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  text: {
    color: 'green',
    fontSize: 50,
    fontWeight: '700',
    margin: 8,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },

  input: {
    height: 50,
    width: 370,
    marginHorizontal: 12,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  button: {
    height: 40,
    margin: 4,
    backgroundColor: '#99109c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginHorizontal: 16,
  },
  tex1: {
    color: 'green',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  button1: {
    height: 40,
    margin: 4,
    backgroundColor: '#2865de',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginHorizontal: 16,
  },
  button2: {
    height: 40,
    margin: 4,
    backgroundColor: '#ffb3b3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginHorizontal: 16,
    //backgroundColor: '#ffb3b3',
  },
  chuyenlogout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
});
