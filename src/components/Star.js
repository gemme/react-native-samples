import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Star = props => {
  const TOTAL_STARS = [1, 2, 3, 4, 5];
  // rating
  return (
    <View style={styles.stars}>
      {TOTAL_STARS.map((v, index) => {
        const color = props.rating >= v ? '#FFD64C' : 'grey';
        return <Icon name="star" color={color} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
