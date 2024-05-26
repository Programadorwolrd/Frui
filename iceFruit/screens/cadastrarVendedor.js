import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


const handleDeletePress = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3050/vendedores/delete', {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }

    alert('Vendedor deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar o vendedor: ', error);
  }
};



export default function CadastrarVendedor() {
  
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const handlePress = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3050/vendedores/cadastrar', {
        nome: nome,
        cpf: cpf
      });

      console.log(response.data);
      alert('Vendedor Cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>

<Text style={styles.title}>Cadastro de Vendedores</Text>



      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do vendedor"
      />

      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="Digite o CPF do vendedor"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.buttonDelete} onPress={handleDeletePress}>
        <Text style={styles.buttonText}>Deletar Todos</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Cor do texto
    marginBottom: 20, // Espaço abaixo do título
    textAlign: 'center', // Alinhamento do texto
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
    marginBottom: 10,
  },
  buttonDelete: {
    backgroundColor: 'red', // Cor de fundo vermelha
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});