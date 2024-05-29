import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import searchBattery from '../services/Database';

const HomeScreen = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [battery, setBattery] = useState('');

  const handleSearch = async () => {
    const result = await searchBattery(make, model);
    setBattery(result);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={make}
        onChangeText={setMake}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
      />
      <Button title="Buscar Batería" onPress={handleSearch} />
      {battery ? <Text style={styles.result}>Batería: {battery}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
