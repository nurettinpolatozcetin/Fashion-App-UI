import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  eywastyle: {
    width: '100%',
    height: 450,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  searchbar: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '95%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchicon: {
    width: 30,
    height: 30,
    tintColor: '#ffff',
    margin: 10,
  },
  recommendations: {
    position: 'absolute',
    flexDirection: 'column',
    marginTop: 330,
    marginLeft: 30,
    marginVertical: 10,
  },
  background: {
    backgroundColor: 'rgba(128,128,128,0.1)',
    flex: 1,
  },
  trendings: {
    width: 180,
    height: 210,
    borderRadius: 20,
  },
  productbar: {
    width: 180,
    height: 65,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ffff',
    position: 'absolute',
    marginTop: 145,
  },
  trendbar: {
    flexDirection: 'row',
    margin: 10,
  },
});
