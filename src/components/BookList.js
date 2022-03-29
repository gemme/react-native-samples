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
import {API_URL} from '../constants';
import BookImage from 'assets/book.png';

export const BookList = props => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
            navigation={props.navigation}
            id={item.id}
          />
        )}
        keyExtractor={item => item.title}
        refreshing={loading}
        onRefresh={() => {
          setLoading(true);
          fetch(`${API_URL}Books`)
            .then(response => response.json())
            .then(data => {
              setBooks(data);
              setLoading(false);
            })
            .catch(error => {
              console.log(error);
              setLoading(true);
            });
        }}
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
