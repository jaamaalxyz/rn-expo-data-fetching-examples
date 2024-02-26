import { Pressable, StyleSheet, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* add a pressable button to navigate to the details screen */}

      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={{
          backgroundColor: '#0ada1a',
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
        }}
      >
        <Text>Go to Details</Text>
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
  },
});
