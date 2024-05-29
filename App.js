import { useState } from 'react';
import {
  Button,
 SafeAreaView,
 StatusBar,
 StyleSheet,
  View,
} from 'react-native';
import BatterySearch from './src/components/BatterySearch'
import { TextInput } from 'react-native';


const App = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <View>
    <StatusBar backgroundColor="orange" />     
   
      <SafeAreaView style={styles.container}>
      <BatterySearch />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
