// app/screens/HomeScreen.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const HomeScreen = () => {
  // Use the useNavigation hook from expo-router to get the navigation object
  const navigation = useNavigation();

  return;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
