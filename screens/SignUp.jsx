import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import { globalStyle } from '../utils/globalStyle';
import MyDrawer from '../navigation/MyDrawer';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyle.centerView}>
      <Button onPress={() => navigation.navigate('home')} title='Home Screen' />
    </View>
  )
}

export default SignUp