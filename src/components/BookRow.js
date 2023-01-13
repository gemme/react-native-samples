import * as React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function BookRow(props) {
  const [info, setInfo] = useState(null);
  return (
    <View
      style={[
        styles.row,
        {
          backgroundColor: props.id % 2 ? 'white' : '#F3F3F7',
        },
      ]}>
      <View style={styles.edges}>
        <Text>{props.id}</Text>
      </View>
      <View style={styles.titleBook}>
        <Text>{props.title}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setInfo('info ' + props.id);
          console.log('pressed');
        }}>
        <View style={styles.edges}>
          <Text>{'Info'}</Text>
        </View>
      </TouchableOpacity>
      {info && (
        <View>
          <Text>{info}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleBook: {
    flex: 8,
    flexDirection: 'column',
  },
  author: {color: 'grey'},
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
