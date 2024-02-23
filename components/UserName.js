import React from 'react';
import { Text } from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <Text>Hello, {username}!</Text>
  );
};

export default GreetUser;