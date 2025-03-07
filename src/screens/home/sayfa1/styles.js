import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  headerstyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
    alignItems: 'center',
  },
  headertext: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  backicon: {
    width: 25,
    height: 25,
  },
  skullstyle: {
    width: 150,
    height: 150,
  },
  skulltext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  skullsizetext: {
    fontSize: 15,
    opacity: 0.6,
  },
  product1: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  producttext1: {
    flexDirection: 'column',
    margin: 10,
  },
  pricetext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  addstyle: {
    width: 20,
    height: 20,
  },
  amountstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    borderWidth: 0,
    padding: 8,
    margin: 5,
  },
  amounttext: {
    fontSize: 15,
  },
  product2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  producttext2: {
    margin: 30,
  },
  myrtletext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  myrtlesizetext: {
    fontSize: 15,
    opacity: 0.6,
  },
  product3: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  acceptzone: {
    padding: 35,
    backgroundColor: '#ffff',
    shadowOffset: {height: 20, width: 15},
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  totalstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totaltext: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  checkoutstyle: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 15,
  },
  checkouttext: {
    color: 'white',
    fontWeight: 'bold',
  },

  buttonPress: {
    backgroundColor: '#F9A46C',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  buttonUnPress: {
    borderWidth: 1,
    borderColor: '#F9A46C',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
});
