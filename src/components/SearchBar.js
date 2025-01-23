import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ onSearch }) => {
  return (
    
    <TextInput
      style={styles.input}
      placeholder="Search courses..."
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff', // Background color
    marginBottom: 16,
});

export default SearchBar;
