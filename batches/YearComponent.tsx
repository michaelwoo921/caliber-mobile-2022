import { View, Text } from 'react-native';
import { useEffect } from 'react';
import batchService from './batch.service';

function YearComponent() {
  useEffect(() => {
    batchService.getValidYears();
  }, []);
  return (
    <View>
      <Text> Year</Text>
    </View>
  );
}

export default YearComponent;
