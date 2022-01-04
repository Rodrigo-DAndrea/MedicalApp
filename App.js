import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, _View } from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Maria',
    surname: 'Marta',
    age: '25',
    email: 'mariamarta@gmail.com'
  },
  {
    id: '2',
    name: 'Carlos',
    surname: 'Gardel',
    age: '32',
    email: 'carlosgardel@gmail.com'
  },
  {
    id: '3',
    name: 'Felipe',
    surname: 'Melo',
    age: '36',
    email: 'felipemelo@gmail.com'
  },
  {
    id: '4',
    name: 'Susana',
    surname: 'Horia',
    age: '18',
    email: 'susanahoria@gmail.com'
  },
  {
    id: '5',
    name: 'Marlon',
    surname: 'Brandon',
    age: '65',
    email: 'marlonbrandon@gmail.com'
  },
 ];

export default function App() {
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.surname}</Text>
      <Text>{item.age}</Text>
      <Text>{item.email}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyEtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "#0066ff",
    fontSize: 24
  }
});