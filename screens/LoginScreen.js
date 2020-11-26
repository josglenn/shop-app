import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
        <TouchableOpacity style={styles.backButton} activeOpacity={.5} onPress={()=> props.navigation.goBack()}> 
          <Ionicons name="ios-arrow-round-back" size={70} color="white"  />
        </TouchableOpacity>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.loginDescription}>Description ng Shopping app ginagawa sa pamamagitan ng React Native. </Text>
        </View>

        <View style={styles.formContainer}>
          <View>
          <Text>Email (phone for mobile accounts)</Text>
          <TextInput style={styles.formInput}
          placeholder="example@email.com"
          />
          <Text>Password</Text>
          <TextInput style={styles.formInput} 
          placeholder="*****x"
          secureTextEntry
          />
          </View>
          <TouchableOpacity style={[styles.button, styles.violet]}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={[styles.loginDescription,{color:'#27cae3'}]}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
        
        
        </ScrollView>
    </KeyboardAvoidingView>
      </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#b479d9',
  },
  backButton: {
    margin: 40,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 50,
    backgroundColor: '#c3b4cc'
  },
  loginTextContainer: {
    margin: 40,
  },
  loginText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
  },
  loginDescription: {
    color: 'white',
    fontSize: 15
  }, 
  formContainer: {
    height: '60%',
    alignItems:'center',
    width: '100%',
    marginTop: 50,
  },
  formInput: {
    height: 50,
    width: 285,
    borderLeftColor: '#888',
    borderLeftWidth: 8,
    backgroundColor: "#e0dce3",
    marginBottom: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    fontSize: 18,
    borderRadius: 5
  },
  button: {
    margin: 10,
    padding: 10,
    width: '70%',
    alignItems: 'center',
    borderRadius: 50,
  },
  violet: {
    backgroundColor: 'green'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})

export default LoginScreen