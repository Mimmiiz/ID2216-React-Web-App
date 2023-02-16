import React, { useState } from 'react';
import { View, SafeAreaView, TextInput,  Text, StyleSheet } from 'react-native';
import BusinessSelector from './BusinessSelector';
import { useNavigate } from 'react-router-dom';
  

  const PostYourBusiness = () => {
    const navigate = useNavigate ();
  

    const [inputValueDescription, setInputValueDescription] = useState('');
    const [inputValueServiceProvider, setInputValueServiceProvider] = useState('');
    const [inputValueAddress, setInputValueAddress] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [inputValueAmount, setInputValueAmount] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    
    

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
    <Text style={styles.labelService}><h2>Post Your Business</h2></Text>
      <BusinessSelector/>
      <TextInput
        style={styles.inputboxDesc}
        placeholder="Description of service"
        onChangeText={text => {
          if (text.length <= 250) {
            setInputValueDescription(text);
          }
        }}
        value={inputValueDescription}
        maxLength={250}
      />
      <Text>
        {250 - inputValueDescription.length} characters remaining
      </Text>

    <View style={styles.spacer} />
      <TextInput
        style={styles.inputbox}
        placeholder="Name of person providing service"
        onChangeText={text => {
          if (text.length <= 30) {
            setInputValueServiceProvider(text);
          }
        }}
        value={inputValueServiceProvider}
        maxLength={30}
      />
      <Text>
        {30 - inputValueServiceProvider.length} characters remaining
      </Text>

      <View style={styles.spacer} />
      <TextInput
        style={styles.inputbox}
        placeholder="Enter Address"
        onChangeText={text => {
          if (text.length <= 50) {
            setInputValueAddress(text);
          }
        }}
        value={inputValueAddress}
        maxLength={50}
      />
      <Text>
        {50 - inputValueAddress.length} characters remaining
      </Text>

      <View style={styles.spacer} />
      <TextInput
        style={styles.inputbox}
        placeholder="Enter Phone Number"
        onChangeText={text => {
          if (text.length <= 10) {
            setInputValuePhone(text);
          }
        }}
        value={inputValuePhone}
        maxLength={10}
      />
      <Text>
        {10 - inputValuePhone.length} characters remaining
      </Text>
      <View style={styles.spacer} />

      <TextInput
        style={styles.inputbox}
        placeholder="Enter Email Address"
        onChangeText={text => {
          if (text.length <= 50) {
            setInputValueEmail(text);
          }
        }}
        value={inputValueEmail}
        maxLength={50}
      />
      <Text>
        {50 - inputValueEmail.length} characters remaining
      </Text>
      <View style={styles.spacer} />

      <TextInput
        style={styles.inputbox}
        placeholder="Enter Amount"
        onChangeText={text => {
          if (text.length <= 10) {
            setInputValueAmount(text);
          }
        }}
        value={inputValueAmount}
        maxLength={10}
      />
      <Text>
        {10 - inputValueAmount.length} characters remaining
      </Text>
      <View style={styles.spacer} />
      <button onClick={() => navigate('OrderConfirmation')} style={styles.buttonText}><Text style={styles.confirmButton}>Confirm</Text></button>

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
    },
    spacer: {
      height: 40,
    },
    labelService: {
        borderRadius: 45,
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    inputbox: {
      height: 40,
      width: '100%',
      borderColor: 'gray', 
      borderWidth: 3,
      borderRadius: 45,
      fontSize: 15,
      alignItems: 'center',
      textAlign: 'center',
    },
    inputboxDesc: {
      height: 100,
      width: '100%',
      borderColor: 'gray', 
      borderWidth: 3,
      borderRadius: 45,
      fontSize: 15,
      alignItems: 'center',
      textAlign: 'center',

    },
    input: {
      marginHorizontal: 30,
      backgroundColor: 'white',
      height: 50,
      borderRadius: 50,
      paddingHorizontal: 100,
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center',
      textAlign: 'center',
    },
    buttonText: {
      border: 'none',
      backgroundColor: '#555555',
      padding: 12,
      borderRadius: 40,
      alignItems: 'center',
      width: '100',
    },
    confirmButton: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#F0EEEE', 
  },
}
);
  

export default PostYourBusiness;