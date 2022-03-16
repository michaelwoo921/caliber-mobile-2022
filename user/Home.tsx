import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from '../globalStyles';

function BatchHome() {
  const nav: any = useNavigation();
  function toYearComponent() {
    nav.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Year' }] }));
    nav.navigate('QC Audit');
  }
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.caliber,
          { textAlign: 'center', justifyContent: 'center' },
        ]}
      >
        Welocme to Caliber Mobile
      </Text>
      <TouchableHighlight
        onPress={toYearComponent}
        style={{
          backgroundColor: '#F26925',
          height: 45,
          width: 200,
          borderRadius: 40,
          alignItems: 'center',
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            alignItems: 'center',
            padding: 8,
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          SELECT BATCH {'>'}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default BatchHome;
