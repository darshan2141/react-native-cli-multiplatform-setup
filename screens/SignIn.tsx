import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyle } from '../utils/globalStyle'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'

const SignIn = () => {

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={globalStyle.centerView}>
      <Button onPress={() => navigation.navigate('signUp')} title='SignUp' />
    </View>
  )
}

export default SignIn