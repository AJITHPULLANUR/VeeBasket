import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  // const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    // const numericOnly = text.replace(/[^0-9]/g, '');
    // setPhoneNumber(numericOnly);
  };

  const handleEnterPress = () => {
    // if (phoneNumber.length === 10) {
      navigation.navigate('connection');
    // } else {
    //   Alert.alert('Please enter a valid phone number.');
    // }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* first */}
      <View style={{height: 250, backgroundColor: 'yellow'}}>
        <Image
          style={{width: '100%', height: 250}}
          source={require('../Assets/Image/opening.png')}
        />
      </View>

      {/* second */}
      <View style={{
        // backgroundColor: 'blue', 
        height: 700, width: '100%'}}>
        <View style={{
          // backgroundColor: 'red', 
          width: '100%', height: '13%'}}>
          <Text
            style={{
              fontSize: 26,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
              marginTop: 17,
            }}>
            India's #1 Food delivery and Dining App
          </Text>
        </View>

        <View style={{
          // backgroundColor: 'black', 
          height: '4%', width: '100%',marginTop:8}}>
          <Text style={{color: 'grey', textAlign: 'center'}}>
            Login Or Signup
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            width: '100%',
            height: '10%',
            flexDirection: 'row',
            marginTop:17
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '16%',
              height: 58,
              marginTop: 8,
              marginLeft: 19,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: 'grey',
            }}>
            <Image
              style={{width: '80%', height: '60%', borderRadius: 7}}
              source={require('../Assets/Image/flag.jpg')}
            />
          </View>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: '70%',
              height: 58,
              marginTop: 8,
              marginLeft: 17,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'grey',
            }}
            placeholder="+91 Enter Your Number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            // value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
        </View>

        <View style={{
          // backgroundColor: 'black', 
          height: '8%',marginTop:2}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#e35d6a',
              width: '90%',
              height: '80%',
              marginLeft: 19,
              borderRadius: 10,
              marginTop: 4,
            }}
            onPress={handleEnterPress}>
            <Text
              style={{
                textAlign: 'center',
                top: 8,
                fontSize: 19,
                color: 'white',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          // backgroundColor: 'red',
           height: '6%'}}>
          <Text style={{textAlign: 'center', marginTop: 10}}>Or</Text>
        </View>

        <View
          style={{
            width: '90%',
            height: '10%',
            // backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginLeft: 20,
            marginBottom:19
          }}>
          <View
            style={{
              width: '15%',
              height: '73%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              marginLeft: 30,
              borderWidth: 0.6,
              borderColor: 'grey',
            }}>
            <Image
              style={{width: '60%', height: '65%'}}
              source={require('../Assets/Image/google.png')}
            />
          </View>

          <View
            style={{
              width: '15%',
              height: '73%',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              marginRight: 24,
              borderWidth: 0.6,
              borderColor: 'grey',
            }}>
            <Image
              style={{width: '60%', height: '63%'}}
              source={require('../Assets/Image/dot.png')}
            />
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: '16%',
            // backgroundColor: 'red',
            marginBottom:19
            
          }}>
          <Text style={{textAlign: 'center',marginTop:17}}>
            By continuing, you agree to our Terms of Service Privacy Policy
            Content Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
