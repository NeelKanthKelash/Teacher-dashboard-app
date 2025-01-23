import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeacherInfo = ({ teacher }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{teacher.name}</Text>
    <Text>ID: {teacher.id}</Text>
    <Text>Email: {teacher.email}</Text>
    <Text>Department: {teacher.department}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TeacherInfo;
