import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from './components/card'; // Ajuste o caminho de acordo com a localização do arquivo Card.js
import Header from'./components/header';


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
    
  ];

  return (
    <View>
    <Header/>
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
});

export default App;