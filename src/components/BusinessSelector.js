import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const business = [
  { label: 'Select a service', value: '' },
  { label: 'Salon', value: 'S1' },
  { label: 'Plumber', value: 'S2' },
  { label: 'Electrician', value: 'S3' },
  { label: 'Baby Sitter', value: 'S4' },
  { label: 'Carpenter', value: 'S5' },
];

const BusinessSelector = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(business[0].value);

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedBusiness}
        onValueChange={(itemValue) => setSelectedBusiness(itemValue)}
      >
        {business.map(bs => (
          <Picker.Item label={bs.label} value={bs.value} key={bs.value} />
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
    padding: 30,
    backgroundColor: '#F2F2F2',
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
    paddingHorizontal: 65,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default BusinessSelector;
