import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getBatteryForVehicle } from '../services/BatteryServices';

const BatterySearch = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [batteryInfo, setBatteryInfo] = useState(null);

  
  const handleSearch = () => {
    const result = getBatteryForVehicle(make, model);
    console.log(result, 'result');
    setBatteryInfo(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Marca:</Text>
      <TextInput style={styles.input} value={make} onChangeText={setMake} placeholder="Ingrese la marca del vehiculo" />
      <Text style={styles.label}>Modelo:</Text>
      <TextInput style={styles.input} value={model} onChangeText={setModel} placeholder="Ingrese el modelo del vehiculo" />
      <Button title="Buscar Bateria" onPress={handleSearch} />
      {batteryInfo && (
        <View style={styles.result}>
          <Text>Battery Model: {batteryInfo.battery}</Text>
          <Text>Amperage: {batteryInfo.amperage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width:'100%',
    marginTop:200,
    height:100
  },
  label: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
  },
});

export default BatterySearch;
