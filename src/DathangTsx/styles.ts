import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 120,
    height: 70,
  },
  text: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  soluong: {
    alignItems: 'center',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSL: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '800',

    width: '30%',
    height: 50,
    paddingTop: 8,
  },
  textSL1: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '800',

    width: 40,
    height: 50,
    paddingTop: 8,
  },
  btnSL: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    width: 50,
    backgroundColor: 'blue',
  },
  giaban:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
    height:50,
    marginTop:20
  },
  txtgia:{
    width:'40%',
    
    fontSize: 20,
    color:'#000',
    backgroundColor:'#fff',
    textAlign:'center',
    fontWeight:'700', 
    

  },
  btngia:{
    width:'60%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  },
});

export default styles;
