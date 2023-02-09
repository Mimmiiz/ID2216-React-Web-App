import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, 
  FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SalonButton from './SalonButton';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';

const locations = [
  'T-Centralen',
  'Solna',
  'Kista',
  'Akala',
  'Sodertalje',
  'Stadion',
];



const SearchBar = () => {
  const navigate = useNavigate ();
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState(false);

  const filteredlocations = locations.filter(
    location =>
      location.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Location"
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
          setShowList(text.length > 0);
        }}
      />
      {showList && (
        <FlatList
          data={filteredlocations}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Text style={styles.item} onPress={() => setSearchTerm(item)}>
              {item}
            </Text>
          )}
        />
      )}
      <View style={styles.spacer} />
     <SalonButton></SalonButton>
     <View style={styles.spacer} />
      <TouchableOpacity style={styles.buttonText}>
      <button onClick={() => navigate('PostYourBusiness')}><Text style={styles.labelService}>Post your business</Text></button>
     </TouchableOpacity>
     <View style={styles.spacer} />

     <NavigationBar></NavigationBar>

    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    padding: 30,
    backgroundColor: '#F2F2F2',
  },
  spacer: {
    height: 20,
  },
  input: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 100,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  labelService: {
    backgroundColor: '#333',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0EEEE', 
},
buttonText: {
  backgroundColor: '#333',
  padding: 10,
  borderRadius: 40,
  alignItems: 'center',
  width: '100',
},
});

export default SearchBar;