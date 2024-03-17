import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textStyle}>ID: {item.id}</Text>
      <Text style={styles.textStyle}>Title: {item.title}</Text>
      <Text style={styles.textStyle}>
        Completed: {item.completed ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  textStyle: {
    color: '#1a7c89',
  },
});
