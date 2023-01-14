import * as React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Star} from 'components/Star';
export function BookRow(props) {
  return (
    <View
      style={[
        styles.row,
        {
          backgroundColor: props.id % 2 ? 'white' : '#F3F3F7',
        },
      ]}>
      <View style={styles.edges}>
        <Image
          source={{
            uri:
              'http://localhost:3000/api/Containers/images/download/' +
              props.image,
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <View style={styles.bookContainer}>
        <View style={styles.titleBook}>
          <Text>{props.title}</Text>
          <Text style={styles.author}>{props.author}</Text>
        </View>
        <Star rating={props.rating} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('pressed');
          props.navigation.navigate('Info', {
            bookId: props.id,
          });
        }}>
        <View style={styles.edges}>
          <Text>{'Info'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleBook: {
    fontWeight: '200',
  },
  author: {color: 'grey'},
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
