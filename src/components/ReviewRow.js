import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {Star} from 'components/Star';

const formatDate = d => {
  return new Date(d).toLocaleDateString();
};

export function ReviewRow(props) {
  return (
    <View
      style={[
        styles.row,
        {
          backgroundColor: props.id % 2 ? 'white' : '#F3F3F7',
        },
      ]}>
      <View style={styles.reviewContainer}>
        <View style={styles.userName}>
          <Text>{props.userName}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text>{formatDate(props.date)}</Text>
        </View>
        <Star rating={props.rating} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userName: {
    fontWeight: '200',
  },
  description: {color: 'grey'},
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
