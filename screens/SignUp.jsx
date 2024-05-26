import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import { globalStyle } from '../utils/globalStyle';

const SignUp = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={globalStyle.centerView}>
      <Button onPress={() => navigation.navigate('home')} title='Home Screen' />
    </View>
  )
}

export default SignUp