import { StyleSheet, Text, View } from 'react-native';
import { AxiosExample, FetchExample } from '../components';
import { DataFetchType } from '../constants';

function DetailsScreen({ route }) {
  const { type } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        Data fetching with {type.toLowerCase()}
      </Text>
      <>
        {type === DataFetchType.FETCH ? (
          <FetchExample />
        ) : type === DataFetchType.AXIOS ? (
          <AxiosExample />
        ) : (
          <Text>Not Found</Text>
        )}
      </>
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
  titleStyle: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
