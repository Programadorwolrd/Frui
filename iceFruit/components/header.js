import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'react-native'
import Logo from './.././assets/FRUITSPLASH.png'


const Card = ({product}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source={require('./../assets/FRUITSPLASH.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        width: 500,
        height: 60,
        backgroundColor: 'black',
        
    },
    tinyLogo: {
      alignItems: 'start',
      marginTop: 25,
      
      
  },
})

export default Card