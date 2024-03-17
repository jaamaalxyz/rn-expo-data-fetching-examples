import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DataFetchType } from '../constants';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            type: DataFetchType.FETCH,
          })
        }
        style={{
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
          backgroundColor: '#1dab6f',
        }}
      >
        <Text style={styles.textStyle}>Fetch API Example</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80c0c0',
  },
  textStyle: {
    padding: 10,
    fontSize: 24,
    color: '#f5f5f5',
  },
});
