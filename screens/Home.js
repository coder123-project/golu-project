import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
} from 'react-native';


//export default function Home() {
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground  source={{uri:'https://cdn.wallpapersafari.com/28/72/eMnp5F.jpg'}}
        style={styles.backgroundImage}
        >


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Books')}>
            <Text style={styles.paragraph}>Books</Text>
            <Image source={require('../assets/book.png')} 
            style={styles.iconImage} 
            /> 
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Comic')}>
            <Text style={styles.paragraph}>Comic</Text>
            <Image source={require('../assets/comic2.png')} 
            style={styles.iconImage} 
            /> 
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Anime')}>
            <Text style={[styles.paragraph,{marginRight:20 }] }>Anime</Text>
             <Image source={require('../assets/am.png')} 
            style={styles.iconImage} 
            /> 
          </TouchableOpacity>
          
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    color: 'black',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  paragraph: {
    color: 'white',
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems:'center',
   // marginBottom:20
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
  iconImage: {
    position: 'absolute',
    height: 80,
    width: 160,
    resizeMode: 'contain',
    right: -50,
    top: -15,
  },
});
