import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Dimensions, View, ScrollView, Image, Text } from 'react-native'



const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const images = [
  'https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=',
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80',
  'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]


export const SliderImage = () =>{
  const [imgActive, setImgActive] = useState(0)

  const onchange = (nativeEvent) =>{
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive){
        setImgActive(slide)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.wrap} >
          <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          >
            {
              images.map((e, index) =>
              <Image 
              key={e}
              resizeMode='cover'
              source={{uri: e}} 
              style={styles.wrap}
              />)
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((e,index)=>
                <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot} >
                    ●
                </Text>
              )
            }
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    backgroundColor:"pink",
  },
  wrap:{
    width: WIDTH,
    height: HEIGHT * 0.4,
    marginTop:10
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'white'
  },
  dot:{
    margin: 3,
    color:'black'
  }
})