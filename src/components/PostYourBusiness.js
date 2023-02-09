import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, 
  FlatList, Text, StyleSheet } from 'react-native';

  const typeofservice = [
    'Plumber',
    'Electrician',
    'Salon',
    'Baby Sitting',
  ];
  

  const PostYourBusiness = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [showList, setShowList] = useState(false);
  
    const typeofservicefiltered = typeofservice.filter(
      tos =>
        tos.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );

    const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
    <Text style={styles.labelService}><h2>Post Your Business</h2></Text>
    <View style={styles.spacer} />
      <TextInput
        style={styles.input}
        placeholder="Name of the Service"
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
          setShowList(text.length > 0);
        }}
      />
      {showList && (
        <FlatList
          data={typeofservicefiltered}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Text style={styles.item} onPress={() => setSearchTerm(item)}>
              {item}
            </Text>
          )}
        />
      )}
      <View style={styles.spacer} />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
        placeholder="Description of service"
        onChangeText={text => {
          if (text.length <= 250) {
            setInputValue(text);
          }
        }}
        value={inputValue}
        maxLength={250}
      />
      <Text>
        {250 - inputValue.length} characters remaining
      </Text>

    <View style={styles.spacer} />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
        placeholder="Name of person providing service"
        onChangeText={text => {
          if (text.length <= 30) {
            setInputValue(text);
          }
        }}
        value={inputValue}
        maxLength={30}
      />
      <Text>
        {30 - inputValue.length} characters remaining
      </Text>

      <View style={styles.spacer} />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
        placeholder="Enter Address"
        onChangeText={text => {
          if (text.length <= 50) {
            setInputValue(text);
          }
        }}
        value={inputValue}
        maxLength={50}
      />
      <Text>
        {50 - inputValue.length} characters remaining
      </Text>

      <View style={styles.spacer} />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 3}}
        placeholder="Enter Phone Number"
        onChangeText={text => {
          if (text.length <= 10) {
            setInputValue(text);
          }
        }}
        value={inputValue}
        maxLength={10}
      />
      <Text>
        {10 - inputValue.length} characters remaining
      </Text>

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
      height: 60,
    },
    labelService: {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
}
);
  

export default PostYourBusiness;