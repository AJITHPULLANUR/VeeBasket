import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {malbar} from '../Components/Datas';
import babelConfig from '../babel.config';
import { useCart } from '../Components/ShopContext';

const Malbar = ({navigation}) => {
  const {addToCart,cartItems}=useCart()
  console.log(cartItems);
  
  
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* bar */}
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 160,
              height: 40,
              backgroundColor: 'white',
              flexDirection: 'row',
              marginLeft: 230,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../Assets/Hotel/Insideicons/search.png')}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                width: 25,
                borderRadius: 7,
                borderTopRightRadius: 14,
                borderTopLeftRadius: 14,
                borderBottomRightRadius: 23,
                borderBottomLeftRadius: 23,
              }}>
              <View style={{backgroundColor: 'white', width: 25}}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../Assets/Hotel/Insideicons/heart.png')}
                />
              </View>
            </TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../Assets/Hotel/Insideicons/share.png')}
            />
            <Image
              style={{width: 25, height: 25}}
              source={require('../Assets/Hotel/Insideicons/dots.png')}
            />
          </View>
        </View>

        {/* hotelnamed */}
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 200,
          }}>
          <Text
            style={{
              width: '100%',
              height: 50,
              // backgroundColor: 'green',
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 30,
              color: 'black',
            }}>
            Malbar
          </Text>
          <Text
            style={{
              width: '100%',
              height: 15,
              // backgroundColor: 'yellow',
              fontSize: 11,
              textAlign: 'center',
            }}>
            Fast Food ◉ Bevarages ◉ ₹200 for One
          </Text>

          {/* ratings */}
          <View
            style={{
              width: '100%',
              height: 40,
              // backgroundColor: 'blue',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
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
              <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 3}}>
                3.3
              </Text>
              <Image
                style={{width: 11, height: 11, marginTop: 4, marginLeft: 2}}
                source={require('../Icons/star.png')}
              />
            </View>
            <Text
              style={{
                // backgroundColor: 'red',
                marginTop: 5,
                fontWeight: 500,
              }}>
              4k Rating
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              // backgroundColor: 'yellow',
              height: 20,
              flexDirection: 'row',

              borderBottomColor: 'grey',
              // borderBottomWidth: 1,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 14, height: 14, marginLeft: 8, marginTop: 2}}
              source={require('../Icons/timer.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginLeft: 10,
                marginTop: 2,
                fontWeight: 'bold',
              }}>
              17 min ◉ 1 km
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginLeft: 10,
                marginTop: 2,
                fontWeight: 'bold',
              }}>
              Manjeri Locality
            </Text>
          </View>
        </View>

        {/* discounts */}
        <View
          style={{
            backgroundColor: '#ccdbd0',
            width: '100%',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '95%',
              height: 70,
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: '20%',
                height: 70,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Image
                style={{height: 60, width: 60, marginLeft: 10, marginTop: 6}}
                source={require('../Icons/discount.png')}
              />
            </View>

            <View style={{backgroundColor: 'white', width: '60%', height: 70}}>
              <Text style={{marginLeft: 8, marginTop: 10, color: 'black'}}>
                FLAT ₹ 125 OFF
              </Text>
              <Text style={{marginLeft: 8, color: 'black'}}>
                Use Code FLAT125 | above ₹ 249{' '}
              </Text>
            </View>
            <Text style={{marginTop: 25, marginLeft: 25, color: 'red'}}>
              2/5
            </Text>
          </View>
        </View>

        {/* tools */}

        <View style={{backgroundColor: 'white', width: '100%', height: 45}}>
          <View
            style={{
              width: 400,
              height: 40,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 70,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../Assets/Hotel/Insideicons/greendot.png')}
              />
              <Text
                style={{
                  color: 'grey',
                  textAlign: 'center',

                  fontSize: 13,
                  letterSpacing: 0.5,
                  fontWeight: '500',
                }}>
                Veg
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 30,
                width: 70,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../Assets/Hotel/Insideicons/egg.png')}
              />

              <Text
                style={{
                  color: 'grey',
                  textAlign: 'center',
                  fontSize: 13,
                  letterSpacing: 1,
                  fontWeight: '500',
                }}>
                Egg
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../Assets/Hotel/Insideicons/leg.png')}
              />

              <Text
                style={{
                  color: 'grey',
                  textAlign: 'center',
                  fontSize: 13,
                  letterSpacing: 1,
                  fontWeight: '500',
                }}>
                Non-Veg
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 30,
                width: 70,
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../Assets/Hotel/Insideicons/best.png')}
              />

              <Text
                style={{
                  color: 'grey',
                  textAlign: 'center',
                  fontSize: 13,
                  letterSpacing: 1,
                  fontWeight: '500',
                }}>
                Best
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* fooditem */}
        <FlatList
          style={{flex: 1, marginTop: 10}}
          data={malbar}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>navigation.navigate("more",{itemId:item.id})}
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: 210,
                marginBottom: 10,
              }}>
              <View
                style={{backgroundColor: 'white', width: '100%', height: 190}}
                key={item.id}>
                {/* tag */}
                <View
                  style={{backgroundColor: 'white', width: '100%', height: 30}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'red',
                      marginLeft: 20,
                      letterSpacing: 0.5,
                      fontWeight: 'bold',
                    }}>
                    {item.item}
                  </Text>
                </View>

                {/* arrow */}

                <View
                  style={{width: '100%', height: 20, backgroundColor: 'white'}}>
                  {/* <Image
                    style={{width: 25, height: 25, marginLeft: 360}}
                    source={require('../Assets/Hotel/Farsa/arrow.png')}
                  /> */}
                </View>

                {/* types */}
                <View
                  style={{
                    width: '100%',
                    height: 140,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                  }}>
                  {/* details */}
                  <View
                    style={{
                      width: '65%',
                      height: 140,
                      backgroundColor: 'white',
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: 20,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{width: 20, height: 20, marginLeft: 23}}
                        source={item.type}
                      />

                      <View
                        style={{
                          width: 60,
                          height: 20,
                          backgroundColor: 'red',
                          marginLeft: 10,
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            textAlign: 'center',
                            marginTop: 2,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          Must Try
                        </Text>
                      </View>
                    </View>

                    {/* foodssa */}
                    <View
                      style={{
                        width: '100%',
                        height: 25,
                        backgroundColor: 'white',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'black',
                          marginLeft: 22,
                        }}>
                        {item.food}
                      </Text>
                    </View>

                    {/* ratingss */}
                    <View
                      style={{
                        width: '80%',
                        height: 25,
                        backgroundColor: 'white',
                        marginLeft: 22,
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{width: 60, height: 20}}
                        source={item.star}
                      />
                      <Text
                        style={{
                          marginLeft: 6,
                          fontSize: 12,
                          marginTop: 3,
                          color: 'black',
                        }}>
                        {item.rating}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '100%',
                        height: 25,
                        backgroundColor: 'white',
                        marginLeft: 10,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          marginLeft: 16,
                          fontSize: 18,
                          marginTop: 3,
                          color: 'black',
                          fontWeight: 'bold',
                        }}>
                        ₹{item.price}
                      </Text>
                    </View>
                  </View>

                  {/* images */}
                  <View
                    style={{
                      width: '33%',
                      height: 140,
                      backgroundColor: 'black',
                      borderRadius: 14,
                      marginRight: 4,
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: 140,
                        borderRadius: 14,
                        position: 'absolute',
                      }}
                      source={item.foodimg}
                    />
                    <TouchableOpacity
                      style={{
                        position: 'relative',
                        width: 75,
                        height: 30,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 116,
                        marginLeft: 30,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'red',
                      }}
                      onPress={()=>addToCart(item.id)}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        ADD
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        <View
          style={{
            width: '100%',
            height: 400,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 120,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '95%', height: 90, borderRadius: 10}}
              source={require('../Assets/Hotel/Farsa/moti.jpg')}
            />
          </View>

          <View style={{width: '98%', height: 90, backgroundColor: 'white'}}>
            <Text style={{fontSize: 13, textAlign: 'start'}}>
              ◉ Menu items, nutritional information and prices are set directly
            </Text>

            <Text>
              ◉ nutritional information and prices are set directly love.
            </Text>

            <Text>◉ nutritional information and prices are set directly</Text>
          </View>
          <TouchableOpacity style={{backgroundColor: 'white', width: '100%', height: 30,}}>
            <Text style={{color: 'red', marginRight: 160, fontWeight: 'bold',}}>
              Report an issue with the menu
            </Text>
          </TouchableOpacity>


          <View style={{width:"100%",height:80,backgroundColor:"white"}}>
            <Image style={{width:90, height:70,marginRight:150}} source={require("../Assets/Hotel/Insideicons/fssai.png")}/>
            <Text style={{color: 'grey', marginLeft: 19, fontSize:11,marginBottom:26,fontWeight:'bold',letterSpacing:0.5}}>LIC.NO.073690736907</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Malbar;

const styles = StyleSheet.create({});
