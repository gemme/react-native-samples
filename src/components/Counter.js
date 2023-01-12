import * as React from 'react';
import {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 50,
        }}>
        {count}
      </Text>
      <Button
        onPress={() => {
          console.log('Pressed');
          setCount(prevState => prevState + 1);
        }}
        title="+"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          console.log('Pressed');
          setCount(prevState => prevState - 1);
        }}
        title="-"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});
