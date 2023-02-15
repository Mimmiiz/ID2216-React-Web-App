import React, {} from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom'; 

const SalonButton = () => {

  return (
    <View style={styles.container}>
    <Text style={styles.labelService}><h2>Services</h2></Text>
    <View style={styles.row}>
    <Link to="/services" state = {{subcategories: ["Men's Salon", "Women's Salon", "SPA & Massage", "Facial & Clean-ups"]}} >
    <TouchableOpacity style={styles.button}>
      <Image
        style={styles.image}
        source={require('../images/salon.jpeg')}
        resizeMode="cover"
      />
        <Text style={styles.label}>Salon</Text>
    </TouchableOpacity>
    </Link>
    <Link to="/services" state = {{subcategories: ["Appliances", "Switch & Socket", "Wiring", "Light"]}} >
     <TouchableOpacity style={styles.button}>
     <Image
       style={styles.image}
       source={require('../images/electrician.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Electrician</Text>
   </TouchableOpacity>
   </Link>
   </View>
   <View style={styles.spacer} />
   <View style={styles.row}>
   <Link to="/services" state = {{subcategories: ["Drainage Pipes", "Basin & Toilets", "Bath & Water Fittings", "Grouting"]}} >
   <TouchableOpacity style={styles.button}>
     <Image
       style={styles.image}
       source={require('../images/plumber.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Plumber</Text>
   </TouchableOpacity>
   </Link>
   <Link to="/services" state = {{subcategories: ["Baby Sitting", "Furniture Repair", "Drilling", "Furniture Assembly"]}} >
   <TouchableOpacity style={styles.button}>
     <Image
       style={styles.image}
       source={require('../images/others.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Others</Text>
   </TouchableOpacity>
   </Link>
   </View>
   </View>
    
  );
};



const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 30,
        backgroundColor: '#F2F2F2',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    spacer: {
        height: 20,
      },
    labelService: {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        width: 125,
        height: 125,
        borderRadius: 40,
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
});

export default SalonButton;