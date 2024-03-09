import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import UserName from './components/UserName';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <UserName username="Casandra Casicas" />
      <UserName username="Earl John Luchin" />
      <UserName username="Jerlin Tagopa" />
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
