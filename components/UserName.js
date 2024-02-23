import React from 'react';
import { View, Text } from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <View>
      <Text>Hello, {username}!</Text>
    </View>
  );
};

const Focusedlang = () => {
  return (
    <View>
      <GreetUser username="Andre" />
      <GreetUser username="Sam" />
      <GreetUser username ="Jomar" />
    </View>
  );
};

export default Focusedlang