import * as React from 'react';
import {useState} from 'react';
import {View, Button, Text, ScrollView, StyleSheet} from 'react-native';

export function MyList() {
  const [elements, setElements] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {elements.map(v => (
          <Text>{'Elemento ' + v}</Text>
        ))}
      </ScrollView>

      <Button
        onPress={() => {
          console.log('Pressed');
          setElements(prevState => {
            // prevState.push(prevState + 1);
            //return prevState;
            let newValue = prevState[prevState.length - 1];
            newValue = newValue + 1;
            return [...prevState, newValue];
          });
        }}
        title="Add more elements"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
});
