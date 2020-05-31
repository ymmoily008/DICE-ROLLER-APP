import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      uri: require('./src/images/dice1.png')
      
    };
  }
  

  getRandomValue=()=>{
     return Math.floor(Math.random()*6) +1;
  }
  playbuttonpressed=()=> {

    // Alert.alert('heyy!' + this.getRandomValue());
    var rNumber= this.getRandomValue();
    switch(rNumber) {
      case 1:
      this.setState({uri:require('./src/images/dice1.png')})
      break;
      case 2:
      this.setState({uri:require('./src/images/dice2.png')})
      break;
      case 3:
      this.setState({uri:require('./src/images/dice3.png')})
      break;
      case 4:
      this.setState({uri:require('./src/images/dice4.png')})
      break;
      case 5:
      this.setState({uri:require('./src/images/dice5.png')})
      break;
      case 6:
      this.setState({uri:require('./src/images/dice6.png')})
      break;
    }

  };

  render() {
  return (
    <View style={styles.container}>
      <Image style={styles.imaging}
      source={this.state.uri} 
      />
      <Image style={styles.imag}
      source={this.state.uri} 
      />
      <TouchableOpacity
      onPress={this.playbuttonpressed}>

      <Text style={styles.gamebutton}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA425C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamebutton: {
    marginBottom:150,
    marginTop:20,
    fontSize: 40,
    color:'#ffffff',
    fontWeight:'bold',
    borderWidth: 2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius: 5,
    borderColor:'#ffffff'
},
imaging :{
  height:300,
  marginRight:10,
  width:300,
  marginTop:100,
  
  }


});
