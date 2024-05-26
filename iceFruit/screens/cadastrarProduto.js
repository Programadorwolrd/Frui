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

      <TouchableOpacity style={styles.buttonDelete} onPress={deleteAllProducts}>
      <Text style={styles.buttonText}>Deletar Todos</Text>
    </TouchableOpacity>


    </View>
  );
}
const deleteAllProducts = async () => {
  try {
    const response = await axios.delete('http://127.0.0.1:3050/produtos/deleteAll');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonDelete: {
    backgroundColor: 'red', // Cor de fundo vermelha
    padding: 10,
    alignItems: 'center',
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
    paddingBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
});