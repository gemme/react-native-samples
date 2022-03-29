import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '../constants';

export const AddReview = props => {
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(null);
  const {bookId} = props.route.params;
  console.log('AddReview,route', props);

  const submitReview = () => {
    fetch(`${API_URL}Reviews`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        userName: name,
        rating: rating,
        date: new Date().toISOString(),
        description: review,
        bookId: bookId,
      }), // body data type must match "Content-Type" header
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        props.navigation.goBack();
      })
      .catch(error => console.log('error'));
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="close" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.addReview}>Book Review</Text>
        <TextInput
          style={styles.input}
          placeholder={'Name (optional)'}
          value={name}
          onChangeText={name => setName(name)}
        />
        <Text style={styles.rating}>Your rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => {
            return (
              <TouchableOpacity
                style={styles.startButton}
                key={i}
                onPress={() => {
                  setRating(i);
                }}>
                <Icon
                  name="star"
                  size={50}
                  color={rating >= i ? '#FFD64C' : '#CCCCCC'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder={'Review'}
          value={review}
          onChangeText={review => setReview(review)}
          multiline={true}
          numberOfLines={5}
        />
        <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
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
    marginBottom: 80,
  },
  startButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
});
