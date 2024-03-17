import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const ListWrapper = ({ loading, error, data }) => {
  const _renderItem = ({ item }) => {
    return <Card item={item} />;
  };

  return (
    <View style={styles.container}>
      {loading && <Text style={styles.textStyle}>Loading...</Text>}
      {error && (
        <Text style={[styles.errTextStyle]}>Error: {error?.message}</Text>
      )}
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          contentContainerStyle={styles.listStyle}
        />
      )}
    </View>
  );
};

export default ListWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1dab6f',
  },
  listStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  textStyle: {
    fontSize: 24,
    color: '#f5f5f5',
  },
  errTextStyle: {
    fontSize: 24,
    color: '#960018',
  },
});
