import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const DataButton = ({ title = '', type = '' }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Details', { type });
  };

  return (
    <Pressable onPress={handleNavigation} style={styles.wrapper}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

export default DataButton;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#1dab6f',
    width: width - 100,
  },
  textStyle: {
    padding: 10,
    fontSize: 18,
    color: '#f5f5f5',
    textAlign: 'center',
  },
});
