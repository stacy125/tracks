import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SigninScreen = () => {
  return (
    <View>
      <Text>SigninScreen</Text>
    </View>
  )
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


const styles = StyleSheet.create({});

export default SigninScreen;
