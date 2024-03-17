import { StyleSheet, Text, View } from 'react-native';
import { FetchExample } from '../components';

function DetailsScreen({ route }) {
  const { type } = route.params;
  return (
    <View style={styles.container}>
      <FetchExample type={type} />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1dab6f',
  },
});
