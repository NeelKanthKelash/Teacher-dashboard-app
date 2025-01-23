import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import mockData from '../assets/mockData.json';
import TeacherInfo from './TeacherInfo';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setCourses(mockData.courses);
    setFilteredCourses(mockData.courses);
    setSelectedTeacher(null); // No teacher selected initially
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(text.toLowerCase()) ||
          course.id.toString().includes(text)
      );
      setFilteredCourses(filtered);
    }
  };

  const handleCoursePress = (course) => {
    const teacher = mockData.teachers.find(
      (teacher) => teacher.id === course.assignedTeacherId
    );
    setSelectedTeacher(teacher);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Selected Teacher Info */}
      {selectedTeacher ? (
        <TeacherInfo teacher={selectedTeacher} />
      ) : (
        <Text style={styles.noTeacherSelected}>Select a course to view the teacher's details</Text>
      )}

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search courses by name or code"
        value={searchText}
        onChangeText={handleSearch}
        placeholderTextColor="#888"
      />

      {/* Courses List */}
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCoursePress(item)} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.noResults}>No courses found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noTeacherSelected: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff', // Background color
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noResults: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CourseList;
