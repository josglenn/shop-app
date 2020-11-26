import { createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'

import LoginRegisterScreen from '../screens/LoginRegisterScren'
import LoginScreen from '../screens/LoginScreen'

const LoginNavigator = createStackNavigator( {
  LoginRegister : LoginRegisterScreen,
  Login: LoginScreen

})
export default createAppContainer(LoginNavigator)