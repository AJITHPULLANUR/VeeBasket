import { StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { albaik, berry, farsa, kouser, malbar, midway, nahdi } from '../Components/Datas'
import { useCart } from '../Components/ShopContext'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const More = ({route, navigation}) => {
 

  const {addToCart,cartItems}=useCart()
  console.log(cartItems);
  const {itemId}=route.params

  const allData=[
    ...farsa,
    ...albaik,
    ...berry,
    ...midway,
    ...kouser,
    ...nahdi,
    ...malbar,
  ]

  const selectedItem=allData.find((item)=>item.id=== itemId)
  if(!selectedItem){return (
    <View style={{backgroundColor:"red",flex:1}}>
      <View style={{width:"100%",height:600,backgroundColor:"blue"}}>
      <Text>
        Item Not Found
      </Text>
      </View>
    </View>
  )}

  const getRelatedProducts = (selectedItem,allData)=>{
    const relatedProduct =allData.filter((item)=>item.cat===selectedItem.cat && item.id !== selectedItem.id)
    return relatedProduct
  }
  const relatedProduct =getRelatedProducts(selectedItem,allData)

  
  


  return (
   <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={{flex:1,backgroundColor:"black",height:850}}>
      <View style={{width:"100%",height:280,justifyContent:'center',alignItems:'center',}}>
        <Image style={{position:'absolute',objectFit:'cover',width:"100%",height:280,opacity:1.2}} source={require('../Assets/Hotel/Insideicons/zom.webp')}/>
   <Image  style={{width:300,height:200,borderRadius:12,marginTop:30,opacity:1.5,position:'relative'}} source={selectedItem.foodimg} />
   <Text style={{fontSize:24,fontWeight:'900',color:"white",marginTop:18,letterSpacing:1,}}>{selectedItem.item}</Text>
      </View>


      <View style={{width:"100%",height:320,backgroundColor:"white"}}>
        <View style={{width:"100%",height:40,backgroundColor:"white",flexDirection:'row',justifyContent:'center',}}>
        <Image style={{width:20,height:20,marginRight:8,marginTop:11}} source={selectedItem.type}/>
        <Text style={{fontSize:24,fontWeight:'bold',color:"red",marginTop:4,letterSpacing:2}}>{selectedItem.food}</Text>
        </View>

        <View style={{width:"100%",height:20,backgroundColor:"white",flexDirection:'row',justifyContent:'center',}}>
          <Image style={{width:50,height:50,marginTop:-16,marginRight:7}} source={require("../Assets/Hotel/Insideicons/stars.png")}/>
<Text style={{fontSize:13,fontWeight:'bold',color:"black",marginTop:0}}>{selectedItem.rating}</Text>
        </View>
        <View style={{width:"95%",height:100,backgroundColor:"white",marginLeft:10}}>
          <Text style={{fontSize:12,color:"grey",lineHeight:18,marginLeft:2}}>{selectedItem.description}</Text>

          

        </View>


       
        <View style={{width:"100%",height:40,backgroundColor:"white",justifyContent:'center',alignItems:'center'}}>

        <TouchableOpacity
                      style={{
                       
                        width: 75,
                        height: 30,
                        backgroundColor: 'white',
                        borderRadius: 10,
                
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'red',
                      }}
                      onPress={()=>(addToCart(selectedItem.id))}>
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




                        <View style={{width:"100%",height:300,backgroundColor:"white",}}>
<View style={{height:40}}>
                          <Text style={{fontSize:20,fontWeight:600,color:"black",marginLeft:20,letterSpacing:1,marginTop:6}}>Related Items</Text>
                          </View>
                          <FlatList 
                          data={relatedProduct}
                          horizontal
                          renderItem={({item})=>(
                            <TouchableOpacity style={{backgroundColor:"white",width:198,height:220,alignItems:'center',borderWidth:1,borderColor:"black",borderRadius:10,marginLeft:2,marginRight:2}} onPress={ ()=>{navigation.push("more",{itemId:item.id})}}>
                              <Image style={{width:"100%",height:140,borderRadius:10}} source={item.foodimg}/>

                              <Text style={{fontSize:18,fontWeight:600,color:"black",marginLeft:10,letterSpacing:3}}>{item.food}</Text>
                            <Text style={{fontSize:15,fontWeight:600,color:"red",marginLeft:10,letterSpacing:3}} >₹{item.price}</Text>
                            <Image style={{height:10,width:50,marginLeft:8,marginTop:6}} source={item.star}/>
                            </TouchableOpacity>

                          )}
                          keyExtractor={(item)=>
                          item.id.toString()
                        }
                        showsHorizontalScrollIndicator={false}
                          />
                        </View>

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




      </View>
      
   

      


  

    </View>
    </ScrollView>
  )
}

export default More

const styles = StyleSheet.create({})