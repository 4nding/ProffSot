import React from 'react';
import { Text } from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <Text>Hello, Im  {username} </Text>
  );
};

export default GreetUser;