import React from 'react';
import { View, SafeAreaView, 
  Text, StyleSheet} from 'react-native';
import SalonButton from './SalonButton';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';
import CitySelector from './CitySelector';



const SearchBar = () => {
  const navigate = useNavigate ();

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <CitySelector></CitySelector>
      <View style={styles.spacer} />
     <SalonButton></SalonButton>
     <View style={styles.spacer} />
      <button onClick={() => navigate('PostYourBusiness')} style={styles.buttonText}><Text style={styles.labelService}>Post your business</Text></button>
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
    width: '100%',
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