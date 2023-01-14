import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import {Star} from 'components/Star';
export function BookInfo(props) {
  const [book, setBook] = useState({});
  useEffect(() => {
    const bookId = props.route.params.bookId;
    fetch('http://localhost:3000/api/Books/' + bookId)
      .then(response => response.json())
      .then(data => {
        setBook(data);
      });
  });
  //console.log(props.route);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri:
              'http://localhost:3000/api/Containers/images/download/' +
              book.image,
          }}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <View>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Star rating={book.rating} />
        </View>
      </View>
    </View>
  );
}

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
  title: {
    fontSize: 20,
  },
  author: {
    fontSize: 16,
    color: 'grey',
  },
});
