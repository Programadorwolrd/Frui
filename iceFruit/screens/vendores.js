import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Image } from 'react-native';
import CardVendedor from '../components/cardVendedor';
import Header from '../components/header';
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
    <View>
      <FlatList
        data={vendedores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardVendedor vendedor={item} />}
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