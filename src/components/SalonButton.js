import React, {} from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom';

const SalonButton = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
    <Text style={styles.labelService}><h2>Services</h2></Text>
    <View style={styles.row}>
    <TouchableOpacity style={styles.button}>
      <Image
        style={styles.image}
        source={require('../images/salon.jpeg')}
        resizeMode="cover"
      />
      <button onClick={() => navigate('BookingScreen')}><Text style={styles.label}>Salon</Text></button>
    </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
     <Image
       style={styles.image}
       source={require('../images/electrician.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Electrician</Text>
   </TouchableOpacity>
   </View>
   <View style={styles.spacer} />
   <View style={styles.row}>
   <TouchableOpacity style={styles.button}>
     <Image
       style={styles.image}
       source={require('../images/plumber.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Plumber</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.button}>
     <Image
       style={styles.image}
       source={require('../images/others.jpeg')}
       resizeMode="cover"
     />
      <Text style={styles.label}>Others</Text>
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
        backgroundColor: '#F2F2F2',
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