import React from 'react';
import { Text } from 'react-native';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import Card from './../components/card'; // Ajuste o caminho de acordo com a localização do arquivo Card.js
import Header from '../components/header'; // Ajuste o caminho de acordo com a localização do arquivo Header.js



export default function Vendedores() {
    const vendedores = [
        {
          photo: { uri: 'https://picsum.photos/3240' },
          nome: 'Produto 1',
        },
        {
          photo: { uri: 'https://picsum.photos/3400' },
          nome: 'Produto 1',
        },
        {
          photo: { uri: 'https://picsum.photos/3200' },
          nome: 'Produto 1',
        },
        {
          photo: { uri: 'https://picsum.photos/1200' },
          nome: 'Produto 1',
        },
        // Adicione mais produtos conforme necessário
      ];
  return (
    <View>
      
      <Header />
        {/* <Button
            title="Cadastrar Produto"
            onPress={() => navigation.navigate('CadastroProduto')}
          /> */}
          <Text>Vendedores Ativos</Text>
      <FlatList
          data={vendedores}
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
    banner: {
      width: 500,
      height: 240,
    },
  });