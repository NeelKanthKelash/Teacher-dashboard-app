import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05, // 5% padding
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
