import React, {} from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom';
import  Navbar from '../Navbar';

const OrderConfirmation = () => {
    const navigate = useNavigate();

  return (
    <View style={ styles.container}>
    <View style={styles.spacer} />
    <Text style={styles.label}><h2>Order Confirmed</h2></Text>  
      <Image
        style={styles.image}
        source={require('../images/BusinessDaigram.jpeg')}
        resizeMode="contain"
      />
    {/* <button onClick={() => navigate('/')} style={styles.buttonText}><Text style={styles.labelService}>Home</Text></button> */}
    <Navbar></Navbar>
    </View>  

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    spacer: {
        height: 20,
      },
      labelService: {
        borderRadius: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F0EEEE',
    },
    label: {
      borderRadius: 45,
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
        width: 350,
        height: 650,
      },
      buttonText: {
        backgroundColor: '#555555',
        border: 'none',
        padding: 12,
        borderRadius: 40,
        alignItems: 'center',
        width: '75%',
      },
});

export default OrderConfirmation;