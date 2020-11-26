import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const LoginRegisterScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.loginOrRegisterText}>{`Login \nOr Register!`}</Text>
      <Text style={styles.descriptionText}>DEscription ng Shopping app ginagawa sa pamamagitan ng React Native. </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.red]} activeOpacity={.5} onPress={()=>props.navigation.navigate('Login')}>
          <Text style={styles.buttonText} activeOpacity={.5}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.violet]}>
          <Text style={styles.buttonText}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b479d9'
  },
  logo: {
    fontSize: 40,
    padding: 40,
    color: 'white'
  },
  loginOrRegisterText: {
    fontSize: 50,
    paddingHorizontal: 40,
    paddingTop: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: 'white',
    paddingHorizontal: 40,
    width: 350,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 120,
    marginVertical: 20,
    height: '100%',
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
  red: {
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})
export default LoginRegisterScreen