import {StyleSheet} from 'react-native';
import {formatDiagnosticsWithColorAndContext} from 'typescript';

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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headericons: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  iconback: {
    backgroundColor: '#ffff',
    padding: 10,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 15,
    marginTop: 10,
  },
  iconback2: {
    backgroundColor: '#ffff',
    padding: 10,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 10,
  },
  producttxt: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  colortxt: {
    marginTop: 20,
  },
  colortype: {
    padding: 10,
    width: 30,
    height: 30,
    backgroundColor: 'black',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  colortype2: {
    padding: 10,
    width: 30,
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  colortype3: {
    padding: 10,
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  colortype4: {
    padding: 10,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    marginHorizontal: 5,
    borderRadius: 20,
  },
  colortypespos: {
    flexDirection: 'row',
    marginTop: 10,
  },
  sizebar: {
    backgroundColor: 'rgba(128,128,128,0.7)',
    width: '95%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  addcartstyle: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 45,
  },
});
