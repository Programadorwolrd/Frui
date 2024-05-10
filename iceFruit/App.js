import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from './components/card'; // Ajuste o caminho de acordo com a localização do arquivo Card.js
import Header from'./components/header';
import { Image } from 'react-native'



const App = () => {
  const products = [
    {
      photo: { uri: 'https://picsum.photos/3200' },
      nome: 'Produto 1',
    },
    {
      photo: { uri: 'https://picsum.photos/300' },
      nome: 'Produto 2',
    },
    // Adicione mais produtos conforme necessário
    {
      photo: { uri: 'https://picsum.photos/200' },
      nome: 'Produto 2',
    },
    // Adicione mais produtos conforme necessário
    {
      photo: { uri: 'https://picsum.photos/2300' },
      nome: 'Produto 2',
    },
    // Adicione mais produtos conforme necessário
    {
      photo: { uri: 'https://picsum.photos/1200' },
      nome: 'Produto 2',
    },
    // Adicione mais produtos conforme necessário
    {
      photo: { uri: 'https://picsum.photos/2200' },
      nome: 'Produto 2',
    },
    {
      photo: { uri: 'https://picsum.photos/140' },
      nome: 'Produto 2',
    },
    // Adicione mais produtos conforme necessário
    {
      photo: { uri: 'https://picsum.photos/1007' },
      nome: 'Produto 2',
    },
    {
      photo: { uri: 'https://picsum.photos/350' },
      nome: 'Produto 2',
    },
  ];

  return (
    <View>
    <Header/>
    <Image
        style={styles.Banner}
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
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
  },
  Banner:{
    justifyContent: 'center',
    alignItems: 'center',
        width: 500,
        height: 240,
        
  }
});

export default App;