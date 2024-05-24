import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'react-native'

export default function CardVendedor({ vendedor }) {
    return (
      <View style={styles.card}>
          <View style={styles.photo}>
              <Image
                  style={styles.photoImg}
                  source={vendedor.photo}
              />
          </View>
          <View>
              <Text style={styles.nome}>{vendedor.nome}</Text>
          </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        width: 150,
        height: 225,
        backgroundColor: '#808080',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    photo: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    photoImg: {
        width: 120,
        height: 200,
    },
    nome: {
        marginTop: 4
    }
})

