import React, {} from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom'; 

const SalonButton = () => {

  return (
    <View style={styles.container}>
    <Text style={styles.labelService}><h1>Services</h1></Text>
    <View style={styles.row}>
    <TouchableOpacity style={styles.button}>
      <Link style={styles.link} to="/services" state={{subcategories: ["Men's Salon", "Women's Salon", "SPA & Massage", "Facial & Clean-ups"]}} >
      <Image
        style={styles.image}
        source={require('../images/salon.jpeg')}
        resizeMode="cover"
      />
      <Text style={styles.label}>Salon</Text>
      </Link>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
    <Link style={styles.link} to="/services" state = {{subcategories: ["Appliances", "Switch & Socket", "Wiring", "Light"]}} >
     <Image
       style={styles.image}
       source={require('../images/electrician.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Electrician</Text>
   </Link>
   </TouchableOpacity>
   </View>
   <View style={styles.spacer} />
   <View style={styles.row}>
   <TouchableOpacity style={styles.button}>
   <Link style={styles.link} to="/services" state = {{subcategories: ["Drainage Pipes", "Basin & Toilets", "Bath & Water Fittings", "Grouting"]}} >
     <Image
       style={styles.image}
       source={require('../images/plumber.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Plumber</Text>
   </Link>
   </TouchableOpacity>
   <TouchableOpacity style={styles.button}>
   <Link style={styles.link} to="/services" state = {{subcategories: ["Baby Sitting", "Furniture Repair", "Drilling", "Furniture Assembly"]}} >
     <Image
       style={styles.image}
       source={require('../images/others.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Others</Text>
   </Link>
   </TouchableOpacity>
   </View>
   </View>
    
  );
};



const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    spacer: {
        height: 20,
      },
    labelService: {
        borderRadius: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        width: 125,
        height: 125,
        borderRadius: 40,
        margin: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
      },

      image: {
        width: '100%',
        height: '80%',
      },
      label: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        marginTop: 5,
      },
      link: {
        width: '100%',
        height: '100%',
        textDecorationLine: 'none',
      }
});

export default SalonButton;