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
  return (
    <View>
      <View>
        <View>
          <View style={Style.imgstyle}>
            <Image source={Images.eywa} style={Style.eywastyle} />
            <View style={Style.header}>
              <TouchableOpacity>
                <View style={Style.iconback2}>
                  <Image source={Icons.back} style={Style.headericons} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={Style.iconback}>
                  <Image source={Icons.basket} style={Style.headericons} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin: 10}}>
            <View style={{marginTop: 10}}>
              <Text style={Style.producttxt}>Eywa Hoodie</Text>
              <Text style={{fontWeight: '400', fontSize: 25}}>$34.99</Text>
            </View>
            <View style={Style.colortxt}>
              <Text style={{fontSize: 20, color: 'rgba(128,128,128,1)'}}>
                Color:
              </Text>
            </View>
            <View style={Style.colortypespos}>
              <TouchableOpacity style={Style.colortype}></TouchableOpacity>
              <TouchableOpacity style={Style.colortype2}></TouchableOpacity>
              <TouchableOpacity style={Style.colortype3}></TouchableOpacity>
              <TouchableOpacity style={Style.colortype4}></TouchableOpacity>
            </View>
            <View>
              <View style={{marginTop: 30}}>
                <Text
                  style={{
                    fontWeight: '400',
                    color: 'rgba(128,128,128,1)',
                    fontSize: 20,
                  }}>
                  Size:
                </Text>
                <View style={{alignItems: 'center'}}>
                  <View style={Style.sizebar}>
                    <TouchableOpacity>
                      <Text>XS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>XL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>XXL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={Style.addcartstyle}>
                <Text style={{color: '#ffff', fontSize: 25, fontWeight: '700'}}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;
