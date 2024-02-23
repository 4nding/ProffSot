import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HelloWorldImage from '../assets/hello-world.png';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Image
        source={HelloWorldImage}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 800,
    height: 500,
  }
});

export default HelloWorld;
