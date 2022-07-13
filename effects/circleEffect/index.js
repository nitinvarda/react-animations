import { View, Text, Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'




const Circle = ({animatedValue,onPress}) =>{
    // const inputRange = 
    const containerBg = animatedValue.interpolate({
        inputRange:[0, 0.001, 0.5, 0.501, 1],
        outputRange:['#fff','#fff','#fff','#444','#444']
    })
    console.log(containerBg)
    return(
        <Animated.View style={[
            styles.container,
            {
                backgroundColor:containerBg
            }
            ]
            }>
            <Animated.View style={[styles.circle,{
                transform:[
                    {
                        perspective:400
                    },
                    {
                        rotateY:animatedValue.interpolate({
                            inputRange:[0,0.5,1],
                            outputRange:["0deg","-90deg","-180deg"]
                        })
                    },
                    {
                        scale:animatedValue.interpolate({
                            inputRange:[0,0.5,1],
                            outputRange:[1,8,1]
                        })
                    },
                    {
                        translateX:animatedValue.interpolate({
                            inputRange:[0,0.5,1],
                            outputRange:[0,20,0]
                        })
                    }
                ]
            }]}>
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.circle,{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}> 

                    <Text style={{fontSize:40}}>{"->"}</Text>
                    </View>
                </TouchableOpacity>

            </Animated.View>
        </Animated.View>
    )
}
export default function (props) {
    const [number,setNumber] = useState(0)
    const animatedValue = useRef(new Animated.Value(0)).current
    const startAnimation = (value) =>{
        return Animated.timing(animatedValue,{
            toValue:value,
            duration:1000,
            easing:Easing.linear(),
            useNativeDriver:false
        })
    }
    const onPress = ()=>{
  
        setNumber(number===1 ? 0 : 1);
        startAnimation(number===1 ? 0 : 1).start()
        
    }
  return (
    <View style={{flex:1,}}>
      <Circle onPress={onPress} animatedValue={animatedValue} />
    </View>
  )





}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 8,
      paddingBottom: 50,
    },
    paragraph: {
      margin: 12,
      fontSize: 24,
      // fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Menlo',
      color: 'white',
    },
    button: {
      height: 100,
      width: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      backgroundColor: 'turquoise',
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  });