import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useCart} from './ShopContext';
import Home from './Home';
import Delivery from './Delivery';
import {farsa} from './Datas';
import Farsa from '../RouteComponents/Farsa';

const History = ({navigation}) => {
  const {addToCart, decreaseQuantity, cartItems, totalAmount} = useCart();

  const renderItemButton = item => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (cartItem) {
      return (
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'red',
          }}>
          <TouchableOpacity
            style={{
              width: 35,
              height: 30,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            onPress={() => decreaseQuantity(item.id)}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: -3,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'black'}}>{item.quantity}</Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 30,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            onPress={() => addToCart(item.id)}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: -3,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.Add} onPress={() => addToCart(item.id)}>
          <Text style={{fontWeight: '900', fontSize: 18, color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      );
    }
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
            }}>
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

      {/* parts */}

      <View
        style={{
          width: 220,
          height: 40,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 22, color: 'red', letterSpacing: 1}}>Cart</Text>
        <Text style={{fontSize: 22, color: 'grey', letterSpacing: 1}}>
          History
        </Text>
      </View>

      {/* secondstep */}

      {/* ternoryoperator */}

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {cartItems.length === 0 ? (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              height: 440,
            }}>
            <Image
              style={{
                width: 300,
                height: 320,
                marginLeft: 30,
                backgroundColor: 'white',
                position: 'absolute',
                marginTop: -5,
              }}
              source={require('../Icons/emp.png')}
            />
            <TouchableOpacity
              style={{
                width: 120,
                height: 40,
                marginLeft: 30,
                backgroundColor: '#fa7000',
                position: 'relative',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 350,
                marginRight: 25,
              }}
              onPress={() => navigation.navigate(Delivery)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Back to Order
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{width: 400, height: 450, backgroundColor: '#fffcf2'}}>
            <Image
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                marginLeft: 140,
                marginTop: 150,
                opacity: 0.1,
              }}
              source={require('../Assets/Image/hist.png')}
            />

            <ScrollView>
              {cartItems.map(item => (
                <View
                  style={{
                    width: '95%',
                    height: 90,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 12,
                    marginLeft: 7,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      width: 82,
                      height: 88,
                      backgroundColor: 'red',
                      marginTop: 0,
                      marginLeft: 0,
                      borderRadius: 10,
                    }}>
                    <Image
                      style={{width: 82, height: 88, borderRadius: 10}}
                      source={item.foodimg}
                    />
                  </View>

                  {/* itemsandprice */}

                  <View
                    style={{width: 170, height: 88, backgroundColor: 'white'}}>
                    {/* foodname */}
                    <View
                      style={{
                        width: 170,
                        height: 44,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          marginTop: 16,
                          marginLeft: 10,
                        }}
                        source={item.type}
                      />
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: 'bold',
                          color: 'black',
                          marginLeft: 5,
                          marginTop: 10,
                        }}>
                        {item.food}
                      </Text>
                    </View>

                    {/* foodrate */}

                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'red',
                        marginLeft: 33,
                        marginTop: 10,
                      }}>
                      ₹{item.price * item.quantity}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 125,
                      height: 88,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {renderItemButton(item)}
                  </View>
                </View>
              ))}
            </ScrollView>

            <View
              style={{
                width: '100%',
                height: 90,
                backgroundColor: '#f0eeeb',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  letterSpacing: 1,
                  marginTop: -14,
                }}>
                Grand Total{' '}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'red',
                  letterSpacing: 2,
                }}>
                ₹{totalAmount()}
              </Text>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 30,
                  borderWidth: 1,
                  backgroundColor: '#fc6603',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                  }}>
                  Place To Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      {/* totalamounts */}

      <View
        style={{
          width: 400,
          height: 60,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 32,
            color: 'grey',
            letterSpacing: 1,
            marginLeft: 15,
            marginTop: 8,
            fontWeight: 'bold',
          }}>
          Vee Basket
        </Text>

        <TouchableOpacity
          style={{
            width: 120,
            height: 30,
            marginRight: 17,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 24,
          }}
          onPress={() => navigation.navigate(Delivery)}>
          <Text style={{color: 'red', fontSize: 12, fontWeight: 'bold'}}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
