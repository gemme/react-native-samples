/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {Header} from 'components/Header';
import {BookRow} from 'components/BookRow';
import {API_URL} from './src/constants';
import BookImage from 'assets/book.png';
// const books = [
//   {title: 'El Perfume', author: 'Patrick Süskind', rating: 4},
//   {title: 'La insoportable levedad del ser', author: 'Milan Kundera'},
//   {title: 'Azteca', author: 'Gary Jennings'},
//   {title: 'Moby Dick', author: 'Herman Melville'},
//   {title: 'Lord of the Flies', author: 'William Golding'},
//   {title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne'},
//   {title: 'The Old Man and the Sea', author: 'Ernest Hemingway'},
//   {title: 'Robinson Crusoe', author: 'Daniel Defoe'},
//   {title: 'Oliver Twist', author: 'Charles Dickens'},
//   {title: 'Lolita', author: 'Vladimir Nabokov'},
//   {title: 'Frankenstein', author: 'Mary Shelley'},
//   {title: 'The Charterhouse of Parma', author: 'Stendhal'},
//   {title: 'The Count of Monte Cristo', author: 'Alexandre Dumas'},
//   {title: 'David Copperfield', author: 'Charles Dickens'},
//   {title: 'Madame Bovary', author: 'Gustave Flaubert'},
//   {title: "Alice's Adventures In Wonderland", author: 'Lewis Carroll'},
//   {title: 'The Woman in White', author: 'Wilkie Collins'},
//   {title: 'Little Women', author: ' Louisa M. Alcott'},
//   {title: 'The Way We Live Now ', author: 'Anthony Trollope'},
//   {title: 'Anna Karenina', author: 'Leo Tolstoy'},
//   {title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky'},
//   {title: 'The Portrait of a Lady', author: 'Henry James'},
//   {title: 'The Trial', author: 'Franz Kafka'},
//   {title: 'Men Without Women', author: 'Ernest Hemingway'},
// ];

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);

  // componentDidMount
  useEffect(() => {
    fetch(`${API_URL}Books`)
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View
        style={{
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          source={BookImage}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <TextInput
        style={styles.txtInput}
        placeholder="Search"
        onChangeText={value => {
          setSearchText(value);
        }}
      />
      <FlatList
        data={books.filter(book => {
          return (
            book.title
              .toLocaleLowerCase()
              .indexOf(searchText.toLocaleLowerCase()) > -1
          );
        })}
        renderItem={({item, index}) => (
          <BookRow
            title={item.title}
            author={item.author}
            index={index}
            rating={item?.rating || 0}
            image={item.image}
          />
        )}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    color: '#f44242',
    padding: 50,
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBook: {
    flex: 8,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  author: {color: 'grey'},
  txtInput: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

export default App;

{
  /* <ScrollView>
{books
  .filter(book => {
    return (
      book.title
        .toLocaleLowerCase()
        .indexOf(searchText.toLocaleLowerCase()) > -1
    );
  })
  .map((v, index) => {
    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor: (index + 1) % 2 ? '#F3F3F7' : 'white',
          },
        ]}>
        <View style={styles.edges}>
          <Text>{index + 1}</Text>
        </View>
        <View style={styles.titleBook}>
          <Text>{v.title}</Text>
          <Text style={styles.author}>{v.author}</Text>
        </View>
        <View style={styles.edges}>
          <Text>{'Info'}</Text>
        </View>
      </View>
    );
  })}
</ScrollView> */
}
