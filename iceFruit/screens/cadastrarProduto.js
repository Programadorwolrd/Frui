import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default function CadastrarProduto() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  const ProdutoCadastrar = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3050/produtos/cadastrar', {
        nome: nome,
        preco:preco,
        quantidade:quantidade,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Cadastrar Produto</Text>
      
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do produto"
      />

      <Text>Preço:</Text>
      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        placeholder="Digite o preço do produto"
        keyboardType="numeric"
      />

<Text>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Digite o preço do produto"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={ProdutoCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});