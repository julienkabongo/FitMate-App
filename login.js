import React from 'react';
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,TouchableOpacity,AsyncStorage,Image } from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class Login extends React.Component {

render() {
  return {
  <Image source={require('./app/img/niacin-and-Bodybuilding.jpg')}/>
style={styles.container}>

<View style={styles.overlayContainer}>

</Image>
};
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    width:100%,
    height:'100%',
  },
  overlayContainer:{
    flex:1,
  }
});

constructor(props) {
super(props);
this.state = {
  username:'',
  password:'',
}
}
 componentDidMount(){
   this._loadInitialState().done();
 }
 _loadInitialState = async () => {
   var value = await AsyncStorage.getItem('user');
   if (value !== null){
     this.props.navigation.navigate('Profile');
     }
 }
}
  render() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
    <View style={styles.container}>
    <Text style={styles.header}>-F I T M A T E-</Text>

    <TextInput
    style={styles.TextInput} placeholder='Username'
    onChangeText={(Username) =>  this.setState{(username)}}
    underlineColorAndroid={'transparent'}/>

    <TextInput
    style={styles.TextInput} placeholder='password'
    onChangeText={(password) => this.setState{(password)}}
    underlineColorAndroid={'transparent'}/>

    <TextInput
    style={styles.TextInput} placeholder='confirm password'
    onChangeText={(confirm password) =>  this.setState{(confirm password)}}
    underlineColorAndroid={'transparent'}/>

    <TouchableOpacity
    style={styles.btn}
    onPress={this.login}>
    <Text>log in</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.btn}
    onPress={this.signup}>
    <Text>Sign up</Text>
    </TouchableOpacity>

    </View>
</KeyboardAvoidingView>
);
}
login = () => {

  alert(this.state.username);

  fetch('http://192.5454.25.2:3000/users',{
  method:'POST',
  header:{
    'Accept':'Application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({
    username:this.state.username,
    password:this.state.password,
    })
  })
  .then((response) => response.json())
  .then((res) => {
    if (res.success === true){
      AsyncStorage.setItem('user',res.user);
      this.props.navigation.navigate('Profile');
    }
    else {
      alert(res.message);
    }
  })
  .done();
  }
)

}
}
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'purple',
    paddingLeft:40,
    paddingRight:40,
  },
  overlayContainer:{
    flex:1,
    backgroundColor:'rgba(47,163,218,.4)'
  },
  header:{
    color:#fff,
    borderColor:'black',
    borderWidth:2,
    padding:20,
    paddingLeft:40,
    paddingRight:40,
    fontSize:24,
    marginBottom:60,
    color:'#fff',
    fontWeight:'bold',
    backgroundColor:'rgba(255,255,255,.1)'
  },
  TextInput:{
    alignSelf:'stretch',
    padding:16,
    marginBottom:20,
    backgroundColor:'#fff',
  },
  btn:{
    alignSelf:'stretch',
    backgroundColor:'black',
    padding:20,
    alignItems: 'center',
  }
})
