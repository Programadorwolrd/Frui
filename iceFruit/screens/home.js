import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import CardProduto from '../components/card'; // Ajuste o caminho de acordo com a localização do arquivo Card.js
import Header from '../components/header'; // Ajuste o caminho de acordo com a localização do arquivo Header.js
import { useNavigation } from '@react-navigation/native';


const home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3050/produtos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View>
    <Header />
    <Image
      style={styles.banner}
      source={require('../assets/banner.png')}
    />
    <FlatList
      data={products}
      renderItem={({ item }) => <CardProduto product={item} />}
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

export default home;

