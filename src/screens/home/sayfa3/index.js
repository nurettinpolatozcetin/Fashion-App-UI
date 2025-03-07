import {
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';

const login = () => {
  return (
    <View style={Style.background}>
      <View>
        <Image source={Images.eywa} style={Style.eywastyle} />
        <View style={Style.header}>
          <View style={Style.searchbar}>
            <Image source={Icons.search} style={Style.searchicon} />
            <TextInput
              style={{color: '#ffff'}}
              placeholder="What are you looking for?"
            />
          </View>
        </View>
        <View style={Style.recommendations}>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 15,
              fontWeight: 400,
            }}>
            Recommendations
          </Text>
          <Text style={{color: '#ffff', fontSize: 30, fontWeight: 'bold'}}>
            Eywa Hoodie
          </Text>
          <Text
            style={{
              color: 'rgb(149, 142, 246)',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            $34,99
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trending</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: 'rgb(65, 106, 254)',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={Style.trendbar}>
          <TouchableOpacity style={{margin: 10}}>
            <Image source={Images.eywa} style={Style.trendings} />
            <View style={Style.productbar}>
              <Text style={{fontSize: 20, marginLeft: 10}}>Eywa Hoodie</Text>
              <Text style={{fontWeight: 'bold', margin: 10}}>$34.99</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}}>
            <Image source={Images.king} style={Style.trendings} />
            <View style={Style.productbar}>
              <Text style={{fontSize: 20, marginLeft: 10}}>King's T-Shirt</Text>
              <Text style={{fontWeight: 'bold', margin: 10}}>$34.99</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 10}}>
            <Image source={Images.myrtlebeach} style={Style.trendings} />
            <View style={Style.productbar}>
              <Text style={{fontSize: 18, marginLeft: 10}}>
                Myrtlebeach Hoodie
              </Text>
              <Text style={{fontWeight: 'bold', margin: 10}}>$34.99</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'rgb(65, 106, 254)',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default login;
