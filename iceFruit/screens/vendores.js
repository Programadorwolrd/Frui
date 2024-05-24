import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Image } from 'react-native';
import CardVendedor from '../components/cardVendedor';
import Header from '../components/header';
import { ImageBackground } from 'react-native';
import axios from 'axios';



export default function Vendedores() {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3050/vendedores')
      .then(function (response) {
        // handle success
        setVendedores(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <ImageBackground source={require('././../assets/background.png')} style={styles.backgroundImage}>
    <View>
      <FlatList
        data={vendedores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardVendedor vendedor={item} />}
      />
    </View>
    </ImageBackground>
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
    backgroundImage: {
      flex: 1,
      width: '90%',
      resizeMode: 'cover', // or 'stretch'
    },
});