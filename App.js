/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {MyList} from './src/components/MyList';
import {Counter} from 'components/Counter';
import {FetchStarWars} from './src/components/FetchStarWars';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BookRow} from 'components/BookRow';

/* const books = [
  {title: 'El Perfume', author: 'Patrick Süskind'},
  {title: 'La insoportable levedad del ser', author: 'Milan Kundera'},
  {title: 'Azteca', author: 'Gary Jennings'},
  {title: 'Cerebro de Broca', author: 'Carl Sagan'},
]; */

const App = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  /* useEffect(() => {
    fetch('http://localhost:3000/api/Books')
      .then(v => v.json())
      .then(v => {
        setBooks(v);
      });
  }, []); */
  useEffect(() => {
    // {"where":{"title":  { "like": "%Azteca%" }  }  }
    fetch(
      'http://localhost:3000/api/Books?filter=%7B%22where%22%3A%7B%22title%22%3A%7B%22like%22%3A%22%25' +
        search +
        '%25%22%7D%7D%7D',
    )
      .then(v => v.json())
      .then(v => {
        setBooks(v);
      });
  }, [search]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{'Book Review'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setSearch(text);
        }}
        value={search}
        placeholder="Search"
      />
      <FlatList
        data={books}
        renderItem={({item}) => (
          <BookRow id={item.id} title={item.title} author={item.author} />
        )}
        keyExtractor={item => item.id}
      />
      {/*  <ScrollView>
        {books
          .filter(book => {
            const lowerCaseTitle = book.title.toLocaleLowerCase();
            return lowerCaseTitle.indexOf(search.toLocaleLowerCase()) > -1;
          })
          .map((v, index) => {
            return (
              <View
                style={[
                  styles.row,
                  {
                    backgroundColor: index % 2 ? 'white' : '#F3F3F7',
                  },
                ]}>
                <View style={styles.edges}>
                  <Text>{index + 1}</Text>
                </View>
                <View style={styles.titleBook}>
                  <Text>{v.title}</Text>
                  <Text style={styles.author}>{v.author}</Text>
                </View>
                <View>
                  <Text>{'Info'}</Text>
                </View>
              </View>
            );
          })}
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    color: 'red',
    padding: 50,
    fontWeight: '300',
  },
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

export default App;
