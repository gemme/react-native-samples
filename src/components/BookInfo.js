import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Star} from 'components/Star';
import {IMG_URL} from '../constants';

export const BookInfo = props => {
  // route.params.book
  const {book} = props.route.params;
  console.log('BookInfo,props', props);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: `${IMG_URL}${book.image}`}}
          style={{
            width: 60,
            height: 80,
          }}
        />
        <View styles={styles.titleBook}>
          <Text>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Star rating={book.rating} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('reviews', {
                bookId: book.id,
              });
            }}>
            <Text>Book Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  edges: {
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
  author: {
    fontSize: 10,
    color: 'grey',
  },
});
