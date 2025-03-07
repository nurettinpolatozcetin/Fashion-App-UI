import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const login = () => {
  const [product1miktar, setProduct1miktar] = useState(1);
  const [product2miktar, setProduct2miktar] = useState(1);
  const [product3miktar, setProduct3miktar] = useState(1);

  const product1price = 20.99;
  const product2price = 32.0;
  const product3price = 22.9;

  const totalPrice =
    product1price * product1miktar +
    product2price * product2miktar +
    product3price * product3miktar;
  return (
    <View style={{justifyContent: 'space-between', flex: 1}}>
      <View style={Style.background}>
        <View>
          <View style={Style.headerstyle}>
            <TouchableOpacity>
              <Image source={Icons.back} style={Style.backicon} />
            </TouchableOpacity>
            <View>
              <Text style={Style.headertext}>My Cart</Text>
            </View>
          </View>
        </View>
        <View style={Style.product1}>
          <Image source={Images.peaceskull} style={Style.skullstyle} />
          <View style={Style.producttext1}>
            <Text style={Style.skulltext}>Peace Skull T-Shirt</Text>
            <Text style={Style.skullsizetext}>Black-L</Text>
            <Text style={Style.pricetext}>Adet Fiyat: $20.99</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: 230,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => setProduct1miktar(product1miktar + 1)}>
                  <Image source={Icons.add} style={Style.addstyle} />
                </TouchableOpacity>
                <View style={Style.amountstyle}>
                  <Text style={Style.amounttext}>{product1miktar}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    setProduct1miktar(Math.max(1, product1miktar - 1))
                  }>
                  <Image source={Icons.subtraction} style={Style.addstyle} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={Style.product2}>
            <Image source={Images.myrtlebeach} style={Style.skullstyle} />
            <View style={Style.producttext2}>
              <Text style={Style.myrtletext}>Myrtle Beach Sweatshirt</Text>
              <Text style={Style.myrtlesizetext}>Blue-L</Text>
              <Text style={Style.pricetext}>$32.00</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: 215,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => setProduct2miktar(product2miktar + 1)}>
                    <Image source={Icons.add} style={Style.addstyle} />
                  </TouchableOpacity>
                  <View style={Style.amountstyle}>
                    <Text>{product2miktar}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setProduct2miktar(product2miktar - 1)}>
                    <Image source={Icons.subtraction} style={Style.addstyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={Style.product3}>
          <Image source={Images.king} style={Style.skullstyle} />
          <View style={Style.producttext2}>
            <Text style={Style.myrtletext}>King's T-Shirt</Text>
            <Text style={Style.myrtlesizetext}>White-XL</Text>
            <Text style={Style.pricetext}>$22.90</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '15%',
            }}>
            <TouchableOpacity
              onPress={() => setProduct3miktar(product3miktar + 1)}>
              <Image source={Icons.add} style={Style.addstyle} />
            </TouchableOpacity>
            <View style={Style.amountstyle}>
              <Text style={Style.amounttext}>{product3miktar}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setProduct3miktar(product3miktar - 1)}>
              <Image source={Icons.subtraction} style={Style.addstyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Style.acceptzone}>
        <View style={Style.totalstyle}>
          <Text style={Style.totaltext}>Total</Text>
          <Text style={Style.totaltext}>${totalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity>
          <View style={Style.checkoutstyle}>
            <Text style={Style.checkouttext}>Check Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default login;
