import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Comic from './Comic'; 

export default function Books() {
  return (
    <View style={styles.container}>
     <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate(Tab)}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   routeCard: {
    flex: 0.5,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#02d3d5',
    alignItems:'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
});
