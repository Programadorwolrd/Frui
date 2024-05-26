import {Text, View, StyleSheet, Image} from 'react-native'

const CardProduto = ({product}) => {
  const defaultImage = 'https://photos.tryotter.com/menu-photos/81a3905d-bfc5-4fa8-a793-87fa63849af6.jpeg';
  const productImage = product.photo ? product.photo : defaultImage;

  return (
    <View style={styles.card}>
        <View style={styles.photo}>
            <Image
                style={styles.photoImg}
                source={{ uri: productImage }}
            />
        </View>
        <View>
            <Text style={styles.nome}>R$ {product.nome}</Text>
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

export default CardProduto;