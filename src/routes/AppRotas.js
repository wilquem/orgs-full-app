import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import ProdutorRotas from './ProdutorRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
