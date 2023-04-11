import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView
} from 'react-native';
import MovieScreen from './MovieScreen'
import { RFValue } from "react-native-responsive-fontsize";//
let movies = require('./MovieScreen');

//export default function Movie() {
   export default class Feed extends React.Component {

  render(){
  return (
    <View style={styles.container}>
    <ScrollView style={styles.storyCard}> 

    <TouchableOpacity style={styles.cardContainer}
    onPress={() => this.props.navigation.navigate(MovieScreen)}>
    <Image source={require('../assets/mmt.jpg')}
          style={styles.storyImage}>
          </Image>
          <Text>
         
          </Text>
          </TouchableOpacity>

    <TouchableOpacity style={styles.cardContainer}
    onPress={() => this.props.navigation.navigate(MovieScreen)}>
    <Image source={require('../assets/cb2.jpg')}
          style={styles.storyImage2}>
          </Image>
          </TouchableOpacity>
          </ScrollView>
         <View style={styles.cardContainer}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={movies}
          renderItem={this.renderItem}
        />
      </View>
    </View>
   
  );
}
   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',

  },
 

  storyImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
  },

  cardContainer: {
     flex: 0.2,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
   
  },

  storyImage2: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: 'center',
   // height: RFValue(1000)  
  },
   storyCard: {
    margin: RFValue(20),
    backgroundColor: "#ffffff",
    borderRadius: RFValue(20)
  },
});
