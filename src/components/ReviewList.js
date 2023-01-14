import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {ReviewRow} from 'components/ReviewRow';

export function ReviewList(props) {
  const [reviews, setReviews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/Books/' + props.bookId + '/reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setRefreshing(false);
      })
      .catch(err => {
        console.log(err);
        setRefreshing(false);
      });
  }, [props.bookId, refreshing]);
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{height: 2, backgroundColor: 'lightgrey'}} />
        )}
        data={reviews}
        renderItem={({item}) => {
          console.log('Book row');
          return (
            <ReviewRow
              userName={item.userName}
              rating={item.rating}
              date={item.date}
              description={item.description}
            />
          );
        }}
        keyExtractor={item => item.id}
        onRefresh={() => {
          setRefreshing(true);
        }}
        refreshing={refreshing}
      />
    </View>
  );
}
