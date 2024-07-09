
import { View,Text,StyleSheet,TextInput,Button ,Image,KeyboardAvoidingView} from "react-native";
import { useState } from "react";
export default function App(){

  const [username,Setusername] = useState ("")
  const [password,setPassword]= useState ("")
  return (
    <KeyboardAvoidingView style = {styles.container}>
      <View style = {styles.form}> 
        <Image source={require ("./assets/adaptive-icon.png")} style={styles.image} />
        <Text style = {styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="enter your username" value={username}  onChangeText={Setusername} /> 
        <Text style= { [{marginTop:10} ,styles.label ]}>Password</Text>
        <TextInput  style={[styles.input, {marginBottom:20}]} placeholder="enter your password" secureTextEntry value= {password}  onChangeText={setPassword}/> 
        <Button  title="Login" onPress={() => {}}/>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles=StyleSheet.create({
 container : { 
  flex:1,
  justifyContent: "center",
  paddingHorizontal : 20,
  backgroundColor: "white"
 },
 form  : { 
 backgroundColor : "white" ,
  padding:20 , 
  borderRadius:10,
  shadowColor:"black",
  shadowOffset : {
    width:2,
    height :2
  },
  shadowRadius:4,
  shadowOpacity:0.25,
  elevation:5
 },
 input : {
  borderWidth:2,
  borderRadius:10,
  height:40,
  marginTop:10,
  padding:5
 },
 label : { 
  fontSize:16,
  fontWeight : "bold"
 },
 image: { 
  height:200,
  width:200,
  marginLeft:50
 }
})