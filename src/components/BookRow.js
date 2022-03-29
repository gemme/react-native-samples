import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Star} from 'components/Star';
import {IMG_URL} from '../constants';
export const BookRow = props => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <View
      style={[
        styles.row,
        {
          backgroundColor: (props.index + 1) % 2 ? '#F3F3F7' : 'white',
        },
      ]}>
      <View style={styles.edges}>
        <Image
          source={{uri: `${IMG_URL}${props.image}`}}
          style={{
            width: 60,
            height: 80,
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

      <View style={styles.edges}>
        <TouchableOpacity
          onPress={() => {
            // setShowInfo(prevShowInfo => {
            //   return !prevShowInfo;
            // });
            props.navigation.navigate('Info', {
              book: {
                image: props.image,
                title: props.title,
                author: props.author,
                rating: props.rating,
                id: props.id,
              },
            });
          }}
          style={styles.button}>
          <Text>{'Info'}</Text>
        </TouchableOpacity>
      </View>
      {showInfo && (
        <View>
          <Text>{'Book Info'}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
  },
  bookContainer: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleBook: {
    fontSize: 200,
  },
  author: {color: 'grey'},
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
