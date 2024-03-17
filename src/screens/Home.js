import { StyleSheet, View } from 'react-native';
import { DataFetchType } from '../constants';
import { DataButton } from '../components';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <DataButton title="Fetch API Example" type={DataFetchType.FETCH} />
      <DataButton title="Axios Example" type={DataFetchType.AXIOS} />
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
});
