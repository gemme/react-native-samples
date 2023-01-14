import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native';

export function Star(props) {
  const TOTAL_STARS = [1, 2, 3, 4, 5];
  console.log(props);
  return (
    <View style={styles.star}>
      {TOTAL_STARS.map(star => {
        // rating 0 -- 5
        // 3
        // star 0 -- 5
        const color = props.rating >= star ? '#FFD64C' : 'grey';
        return <Icon name="star" color={color} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
