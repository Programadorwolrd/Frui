import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Aqui eu importo as telas do tab navigator
import Home from './screens/home.js';
import CadastrarProduto from './screens/cadastrarProduto.js';
import CadastrarVendedor from './screens/cadastrarVendedor.js';
import Vendedores from './screens/vendores.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // Adicione aqui as opções do ícone
        }}
      />
      <Tab.Screen
        name="CadastrarProduto"
        component={CadastrarProduto}
        options={{
          tabBarLabel: 'Cadastrar Produto',
          // Adicione aqui as opções do ícone
        }}
      />
      <Tab.Screen
        name="CadastrarVendedor"
        component={CadastrarVendedor}
        options={{
          tabBarLabel: 'Cadastrar Vendedor',
          // Adicione aqui as opções do ícone
        }}
      />
      <Tab.Screen
        name="Vendedores"
        component={Vendedores}
        options={{
          tabBarLabel: 'Vendedores',
          // Adicione aqui as opções do ícone
        }}
      />
      
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;