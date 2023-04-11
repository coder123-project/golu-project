import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import * as Font from 'expo-font';
import Mercury from '../planets/Mercury';
import Venus from '../planets/Venus';
import Earth from '../planets/Earth';
import Mars from '../planets/Mar';
import Jupiter from '../planets/Jupiter';
import Saturn from '../planets/Saturn';
import Uranus from '../planets/Uranus';
import Neptune from '../planets/Neptune';

let cutomFonts = {
  Alkatra: require('../assets/fonts/Alkatra-VariableFont_wght.ttf'),
};

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync(cutomFonts);
    this.setState({ FontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={require('../assets/bg.png')}
            style={styles.backgroundImage}>
            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Mercury)}>
              <Text style={styles.routeText}>Mercury </Text>
              <Text style={styles.bgDigit}>1</Text>
              <Image
                source={require('../assets/mercury.png')}
                style={styles.iconImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Venus)}>
              <Text style={styles.routeText}>Venus </Text>
              <Text style={styles.bgDigit}>2</Text>
              <Image
                source={require('../assets/venus.png')}
                style={styles.iconImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Earth)}>
              <Text style={styles.routeText}>Earth </Text>
              <Text style={styles.bgDigit}>3</Text>
              <Image
                source={require('../assets/earth2.png')}
                style={styles.iconImage}>
                {' '}
              </Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Mars)}>
              <Text style={styles.routeText}>Mars </Text>
              <Text style={styles.bgDigit}>4</Text>
              <Image
                source={require('../assets/mars.png')}
                style={styles.iconImage}>
                {' '}
              </Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Jupiter)}>
              <Text style={styles.routeText}>Jupiter </Text>
              <Text style={styles.bgDigit}>5</Text>
              <Image
                source={require('../assets/jupi.png')}
                style={styles.iconImage}>
                {' '}
              </Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Saturn)}>
              <Text style={styles.routeText}>Saturn </Text>
              <Text style={styles.bgDigit}>6</Text>
              <Image
                source={require('../assets/seturn.png')}
                style={styles.iconImage}>
                {' '}
              </Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Uranus)}>
              <Text style={styles.routeText}>Uranus </Text>
              <Text style={styles.bgDigit}>7</Text>
              <Image
                source={require('../assets/uri.png')}
                style={styles.iconImage}>
                {' '}
              </Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate(Neptune)}>
              <Text style={styles.routeText}>Neptune </Text>
              <Text style={styles.bgDigit}>8</Text>
              <Image
                source={require('../assets/naptune.png')}
                style={styles.iconImage}>
                {' '}
              </Image>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.2,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    paddingLeft: 45,
    fontFamily: 'Alkatra',
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 70,
    right: 175,
    top: -10,
    bottom: -30,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 70,
    width: 150,
    resizeMode: 'contain',
    right: -50,
    top: -25,
  },
});
