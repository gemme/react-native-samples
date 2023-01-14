import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export function AddReview(props) {
  const [userName, setUserName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [saving, setSaving] = useState(false);
  // http://localhost:3000/api/Reviews
  //http://localhost:3000/api/Books/1/reviews

  /*  {
        "userName": "Manuel",
        "rating": 1,
        "date": "2023-01-14T00:47:45.032Z",
        "description": "No me gusto",
        "id": 2,
        "bookId": 1
      } */
  const onSubmmitReview = () => {
    const data = {
      userName: userName,
      rating: rating,
      date: '2023-01-14T00:47:45.032Z',
      description: review,
    };
    setSaving(true);
    fetch(
      'http://localhost:3000/api/Books/' +
        props.route.params.bookId +
        '/reviews',
      {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => {
        console.log(response);
        setSaving(false);
        if (response.status === 200) {
          props.navigation.goBack();
        }
      })
      .catch(err => {
        console.log(err);
        setSaving(false);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Icon name="close" size={30} color={'black'} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={user => {
          setUserName(user);
        }}
        value={userName}
        placeholder={'user name'}
      />
      <Text style={styles.rating}>Your rating:</Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map(star => {
          return (
            <TouchableOpacity
              key={star}
              style={{padding: 5}}
              onPress={() => {
                setRating(star);
              }}>
              <Icon
                name="star"
                size={50}
                color={rating >= star ? '#FFD64C' : '#CCCCCC'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <TextInput
        style={[styles.multiline]}
        onChangeText={review => {
          setReview(review);
        }}
        value={review}
        placeholder={'Review'}
        multiline
        numberOfLines={5}
        editable
        maxLength={800}
      />
      {saving && <ActivityIndicator size="large" color="#00ff00" />}
      {!saving && (
        <TouchableOpacity onPress={onSubmmitReview} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Review</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    margin: 12,
    borderColor: '#ccc',
    borderRadius: 3,
  },
  multiline: {
    height: 100,
    padding: 10,
    borderWidth: 1,
    margin: 12,
    borderColor: '#ccc',
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
});
