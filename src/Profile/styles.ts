import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // container: {
  //   marginTop: 20,
  //   justifyContent:'center',
  //   alignItems: 'center',
  // },
  anhdaidien:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  title:{
    fontSize: 28,
    color: '#ff0080'
  },
  image:{
    width: 150,
    height: 130,
    borderRadius: 90,
    marginVertical: 15
  },
  btn:{
    width: 150,
    height: 50,
    backgroundColor: '#ff3333',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20
  },
  txtlogout:{
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffff'
  },
  vande: {
    marginHorizontal: 10,
    marginTop: 10
  },
  txtvd: {
    fontSize: 20,
    color:'#000',
    marginBottom: 10
  },
  txtinput:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '96%',
    height: 120,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    color: '#000',
    fontSize: 16
  },
  btngui:{
    width: 90,
    height: 50,
    backgroundColor: '#3385ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20
  },
});
export default styles;
