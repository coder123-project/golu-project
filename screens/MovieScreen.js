import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Content,
  List,
  ListItems,
  Video
} from 'react-native';

//import Video from 'react-native-video';    
export default class MovieScreen extends React.Component {
  constructor(props){
 super(props)
 this.state={
   currentTime: 0,
   duration: 0.1,
   paused:false,
   overly:false
 }
 } 

render = ()=> {
 const {currentTime, duration,paused,overly} = this.state
 return(
   <View style={styles.container}>
<Text style={styles.paragraph}> MovieScreen </Text> 
 </View> 
 )
}  
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
});
