import React,{} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const NavigationBar = () => {
  
  

  return (
    <View style={styles.bottomNavbar}>
      <TouchableOpacity style={styles.bottomNavbarItem} >
        <Text style={styles.bottomNavbarItemText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomNavbarItem}>
        <Text style={styles.bottomNavbarItemText}>Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomNavbarItem}>
        <Text style={styles.bottomNavbarItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavbar: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },
  bottomNavbarItem: {
    alignItems: 'center',
    width: 150,
  },
  bottomNavbarItemText: {
    fontSize: 17,
    marginTop: 5,
    color: 'white',
  },
});

export default NavigationBar;