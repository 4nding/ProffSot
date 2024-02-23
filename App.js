import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import UserName from './components/UserName';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <UserName username="Andre Vince" />
      <UserName username="Sam Syrille" />
      <UserName username="Jomar Jenisan" />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
