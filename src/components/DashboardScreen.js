import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import mockData from '../assets/mockData.json'; // Adjust the path to your JSON file

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    // Simulate data fetching from local JSON
    setTeacher(mockData.teacher);
    setCourses(mockData.courses);
    setFilteredCourses(mockData.courses);
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

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Teacher Info Section */}
      <View style={styles.header}>
        <Text style={styles.teacherName}>{teacher.name}</Text>
        <Text style={styles.teacherInfo}>ID: {teacher.id}</Text>
        <Text style={styles.teacherInfo}>Email: {teacher.email}</Text>
        <Text style={styles.teacherInfo}>Department: {teacher.department}</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search courses by name or code"
        value={searchText}
        onChangeText={handleSearch}
      />

     {/* Courses List */}
     <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noResults}>No courses found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 18,
    backgroundColor: "#112bed",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
 //   width: '100%',
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
  },
  teacherName: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#f0f4ff',
  },
  teacherInfo: {
    fontSize: 14,
    color: '#f0f4ff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#fff', // Background color
    marginBottom: 16,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
    
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	height: 10,
},
shadowOpacity: 0.53,
shadowRadius: 13.97,

elevation: 21,
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
