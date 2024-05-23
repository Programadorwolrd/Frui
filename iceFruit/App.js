import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import Card from './components/card'; // Ajuste o caminho de acordo com a localização do arquivo Card.js
import Header from './components/header';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const products = [
    {
      photo: { uri: 'https://picsum.photos/3200' },
      nome: 'Produto 1',
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <NavigationContainer>
      <View>
        <Header />
        {/* <Button
            title="Cadastrar Produto"
            onPress={() => navigation.navigate('CadastroProduto')}
          /> */}
        <Image
          style={styles.banner}
          source={require('./assets/banner.png')}
        />
        <FlatList
          data={products}
          renderItem={({ item }) => <Card product={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.list}
        />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
  },
  banner: {
    width: 500,
    height: 240,
  },
});

export default App;
