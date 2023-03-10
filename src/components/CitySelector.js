import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const cities = [
  { label: 'Select a city', value: '' },
  { label: 'Kista', value: 'C1' },
  { label: 'T-Central', value: 'C2' },
  { label: 'Tekniska Hogskolan', value: 'C3' },
];

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].value);

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedCity}
        onValueChange={(itemValue) => setSelectedCity(itemValue)}
      >
        {cities.map(city => (
          <Picker.Item label={city.label} value={city.value} key={city.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 50,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default CitySelector;
