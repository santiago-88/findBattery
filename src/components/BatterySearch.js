import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const BatterySearch = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [availableModels, setAvailableModels] = useState([]);

  useEffect(() => {
    setAvailableModels(models[selectedBrand])
  }, [selectedBrand])

  const brands = [
    { key: 'RN', value: 'Renault' },
    { key: 'VW', value: 'Volskwagen' },
    { key: 'FT', value: 'Fiat' },
    { key: 'FO', value: 'Ford' },
    { key: 'CH', value: 'Chevrolet' },
  ];

  const models = {
    'RN': [
      { key: '1', value: 'Sandero', batery: {} },
      { key: '2', value: 'Megane' },
      { key: '3', value: 'Clio' },
    ],
    'VW': [
      { key: '5', value: 'Gol' },
      { key: '6', value: 'Golf' },
      { key: '7', value: 'Polo' },
    ],
    'FT': [
      { key: '8', value: 'Siena' },
      { key: '9', value: 'Uno' },
      { key: '10', value: 'Palio' },
    ],
    'FO': [
      { key: '11', value: 'Escort' },
      { key: '12', value: 'Ranger' },
      { key: '13', value: 'Fiesta' },
    ]
    ,
    'CH': [
      { key: '14', value: 'Astra' },
      { key: '15', value: 'F-100' },
      { key: '16', value: 'Onix' },
    ]
  };

  const vehicleModels = {
    'RN': [
      { key: '1', brandKey: 'RN', value: 'Sandero', battery: {} },
      { key: '2', value: 'Megane' },
      { key: '3', value: 'Clio' },
    ],
    'VW': [
      { key: '5', value: 'Gol' },
      { key: '6', value: 'Golf' },
      { key: '7', value: 'Polo' },
    ],
    'FT': [
      { key: '8', value: 'Siena' },
      { key: '9', value: 'Uno' },
      { key: '10', value: 'Palio' },
    ],
    'FO': [
      { key: '11', value: 'Escort' },
      { key: '12', value: 'Ranger' },
      { key: '13', value: 'Fiesta' },
    ]
    ,
    'CH': [
      { key: '14', value: 'Astra' },
      { key: '15', value: 'F-100' },
      { key: '16', value: 'Onix' },
    ]
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Marca:</Text>
      <SelectList
        setSelected={setSelectedBrand}
        placeholder='Selecciona una marca'
        data={brands}
        defaultOption={brands[0]}
      />
      <Text style={styles.label}>Modelo:</Text>
      <SelectList
        setSelected={setSelectedModel}
        placeholder='Selecciona una marca'
        data={availableModels}
        defaultOption={availableModels ? availableModels : models[0]}
      />
      {/* <Button title="Buscar Bateria" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    marginTop: 200,
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
  button: {
    marginTop: 40,
  },
});

export default BatterySearch;
