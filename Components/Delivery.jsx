import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Modal,
  Button,
} from 'react-native';
import {useState} from 'react';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  createNativeWrapper,
} from 'react-native-gesture-handler';
import {data} from './Datas';
import {hotel} from './Datas';
import {useNavigation} from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Delivery = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Navbar */}
      <View
        style={{
          width: 400,
          height: 60,
          // backgroundColor: 'blue',
          flexDirection: 'row',
        }}>
        {/* GPS */}
        <View
          style={{
            // backgroundColor: 'green',
            height: 60,
            width: 60,
          }}>
          <Image
            style={{width: 30, height: 30, marginLeft: 14, marginTop: 14}}
            source={require('../Icons/placeholder.png')}
          />
        </View>

        {/* place */}
        <View
          style={{
            // backgroundColor: 'red',
            width: 220,
            height: 60,
          }}>
          <View
            style={{
              width: 220,
              height: 30,
              backgroundColor: 'white',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 6,
              }}>
              Home
            </Text>
            <Image
              style={{width: 25, height: 20, marginTop: 10}}
              source={require('../Icons/down.png')}
            />
          </View>

          <View style={{width: 220, height: 30, backgroundColor: 'white'}}>
            <Text style={{marginTop: 4, color: 'grey'}}>
              Manjeri,Thurakkal,Near Gan..
            </Text>
          </View>
        </View>

        {/* Language */}

        <View
          style={{
            width: 55,
            height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#f0f5f1',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../Icons/language.png')}
            />
          </TouchableOpacity>
        </View>

        {/* PROFILE */}

        <View
          style={{
            width: 55,
            height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 45,
              height: 50,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={toggleModal}>
            <Image
              style={{width: 35, height: 35}}
              source={require('../Icons/user.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input */}

      <View
        style={{
          width: 400,
          height: 64,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: 43,
            height: 55,
            borderTopLeftRadius: 9,
            borderBottomLeftRadius: 9,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            marginTop: 2,
            marginLeft: 11,
          }}>
          <Image
            style={{width: 22, height: 22, marginTop: 16, marginLeft: 8}}
            source={require('../Icons/search.png')}
          />
        </View>

        {/* input */}

        <TextInput
          style={{
            width: 285,
            height: 55,
            backgroundColor: 'white',
            textAlign: 'center',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginTop: 2,
            paddingRight: 3,
          }}
          placeholder="Enter What You Want"
        />

        <View
          style={{
            backgroundColor: 'white',
            width: 43,
            height: 55,
            borderTopRightRadius: 9,
            borderBottomRightRadius: 9,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            marginTop: 2,
          }}>
          <Image
            style={{width: 22, height: 22, marginTop: 16, marginLeft: 8}}
            source={require('../Icons/mic.png')}
          />
        </View>
      </View>

      {/* secondpage */}
      <ScrollView>
        <View style={{width: 400, height: 40, backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              marginTop: 6,
              fontSize: 16,
              letterSpacing: 3,
            }}>
            WHAT'S ON YOUR MIND?
          </Text>
        </View>

        {/* menuhorizontal */}

        <ScrollView
          horizontal
          style={{backgroundColor: 'white'}}
          showsHorizontalScrollIndicator={false}>
          <View style={{backgroundColor: 'white'}}>
            <FlatList
              style={{flex: 1, backgroundColor: 'white'}}
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{backgroundColor: 'white', width: 100, height: 100}}
                  key={item.id}
                  onPress={() => navigation.navigate(item.link)}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      width: 90,
                      height: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image style={{width: 80, height: 60}} source={item.img} />
                    <Text style={{color: 'black', fontSize: 12}}>
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={8}
            />
          </View>
        </ScrollView>

        {/* RESTAURANTS */}
        <View style={{width: 400, height: 40, backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              marginTop: 6,
              fontSize: 16,
              letterSpacing: 3,
            }}>
            ALL RESTAURANTS
          </Text>
        </View>

        {/* sort */}

        <View
          style={{
            width: 400,
            height: 40,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: 30,
              width: 70,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'grey',
                textAlign: 'center',

                fontSize: 13,
                letterSpacing: 0.5,
              }}>
              Sort
            </Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../Icons/down.png')}
            />
          </View>

          <View
            style={{
              height: 30,
              width: 60,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'grey',
                textAlign: 'center',
                fontSize: 13,
                letterSpacing: 1,
              }}>
              Nearest
            </Text>
          </View>

          <View
            style={{
              height: 30,
              width: 100,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'grey',
                textAlign: 'center',
                fontSize: 13,
                letterSpacing: 1,
              }}>
              Rating 4.0+
            </Text>
          </View>

          <View
            style={{
              height: 30,
              width: 90,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'grey',
                textAlign: 'center',
                fontSize: 13,
                letterSpacing: 1,
              }}>
              Cuisines
            </Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../Icons/down.png')}
            />
          </View>
        </View>

        {/* number of RESTAURANTS */}
        <View style={{width: 400, height: 40, backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              marginTop: 6,
              fontSize: 14,
              letterSpacing: 1,
            }}>
            8 Restaurants delivering to you
          </Text>
        </View>

        {/* HotEL list...................................................................... */}

        {/* MAP */}
        <FlatList
          style={{
            flex: 1,
            // backgroundColor:"black",
          }}
          data={hotel}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.link)}
              style={{
                width: 380,
                height: 280,
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 29,
                marginLeft: 7,
                marginBottom: 25,
              }}
              key={item.id}>
              <View
                style={{
                  width: 380,
                  height: 180,

                  // backgroundColor:"red",
                }}>
                {/* IMAGE */}
                <Image
                  style={{
                    width: 378,
                    height: 180,
                    borderTopLeftRadius: 29,
                    borderTopRightRadius: 29,
                  }}
                  source={item.hotelimg}
                />
              </View>

              {/* TEXT */}

              <View
                style={{
                  width: 380,
                  height: 30,
                  // backgroundColor: 'grey',
                  flexDirection: 'row',
                }}>
                {/* hotelname */}
                <View
                  style={{width: 320, height: 30, backgroundColor: 'white'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      marginTop: 1,
                      letterSpacing: 0.2,
                    }}>
                    {item.hotelname}
                  </Text>
                </View>

                {/* ratings */}
                <View
                  style={{
                    backgroundColor: '#02d60d',
                    width: 40,
                    height: 20,
                    borderRadius: 6,
                    marginTop: 6,
                    flexDirection: 'row',
                    marginRight: 4,
                  }}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', marginLeft: 3}}>
                    {item.rate}
                  </Text>
                  <Image
                    style={{width: 11, height: 11, marginTop: 4, marginLeft: 2}}
                    source={item.rating}
                  />
                </View>
              </View>

              {/* foodtype */}
              <View style={{width: 350, backgroundColor: 'white', height: 20}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    marginLeft: 10,
                    marginTop: 2,
                    fontWeight: 'bold',
                  }}>
                  {item.detail}
                </Text>
              </View>

              {/* timer */}

              <View
                style={{
                  width: 377,
                  backgroundColor: 'white',
                  height: 20,
                  flexDirection: 'row',
                  borderStyle: 'dotted',
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}>
                <Image
                  style={{width: 14, height: 14, marginLeft: 8, marginTop: 2}}
                  source={item.timer}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    marginLeft: 10,
                    marginTop: 2,
                    fontWeight: 'bold',
                  }}>
                  {item.distance}
                </Text>
              </View>

              {/* discouont */}

              <View
                style={{
                  width: 350,
                  // backgroundColor: 'red',
                  height: 20,
                  flexDirection: 'row',
                  marginLeft: 6,
                }}>
                <Image
                  style={{width: 18, height: 18, marginLeft: 8, marginTop: 4}}
                  source={item.discount}
                />
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 10,
                    marginLeft: 10,
                    marginTop: 6,
                    fontWeight: 'bold',
                  }}>
                  {item.offer}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}></FlatList>

        <View style={{width: 400, height: 80, backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 32,
              color: 'grey',
              fontWeight: 900,
              letterSpacing: 1,
              marginLeft: 15,
              marginTop: 8,
            }}>
            Vee Basket
          </Text>
        </View>
      </ScrollView>

      

          {/* POPUPSTARTINGHERES,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}


          <Modal
  animationType="slide"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={toggleModal}
>
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}
  >
     
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 320,
        height: 380,
      }}
    >
      <View style={{ width: '100%', height: 30, backgroundColor: 'white',justifyContent:'center',alignItems:'center' }}>
        <Text style={{ letterSpacing: 3, color: 'black', fontWeight: 'bold', fontSize: 14 }}>PROFILE</Text>
      </View>

      <View style={{ width: '100%', height: 230, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 5, marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', height: 56, width: '100%' }}>
          <TextInput
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'black',
              borderWidth: 1,
              borderColor: 'black',
              width: 130,
              height: 40,
              borderRadius: 12,
              textAlign: 'center',
              backgroundColor:"white"
            }}
            placeholder="First Name"
          />

          <TextInput
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'black',
              borderWidth: 1,
              borderColor: 'black',
              width: 130,
              height: 40,
              borderRadius: 12,
              textAlign: 'center',
              backgroundColor:"white"
            }}
            placeholder="Last Name"
          />
        </View>

        <TextInput
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            width: 270,
            height: 48,
            borderRadius: 12,
            textAlign: 'center',
            backgroundColor:"white"
          }}
          placeholder="Address"
        />

        <TextInput
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            width: 270,
            height: 40,
            borderRadius: 12,
            textAlign: 'center',
            backgroundColor:"white"
          }}
          keyboardType='decimal-pad'
          placeholder="Pincode"
        />

        <TextInput
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'black',
            borderWidth: 1,
            borderColor: 'black',
            width: 270,
            height: 40,
            borderRadius: 12,
            textAlign: 'center',
            backgroundColor:"white"
          }}
          keyboardType='decimal-pad'
          placeholder="Alternative Mobile Number"
        />
      </View>

      {/* Add any user profile information or components here */}
      <View  style={{ backgroundColor: 'white', width: '100%',borderRadius:22,height:60,justifyContent:'center',alignItems:'center'}}>
      <View style={{ backgroundColor: 'white', width: '30%',borderRadius:22,height:45,paddingTop:10}}>
        <Button title='Save' color={"black"}   onPress={toggleModal}/>
   
        
      </View>
      </View>
    </View>
  </View>
</Modal>




          {/* POPUPSTARTINGHERES,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
 Button:{
  width:400
 }
});
