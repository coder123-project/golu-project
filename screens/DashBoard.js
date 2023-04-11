import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation'

export default function DashBoard() {
  return (
    <NavigationContainer>
      <StackNavigation/> 
    </NavigationContainer>
  );
}
