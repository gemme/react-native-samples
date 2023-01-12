import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Button, Text, ActivityIndicator} from 'react-native';

export function FetchStarWars() {
  const [starwarsCharacter, setStarwarsCharacter] = useState('No Data yet');
  const [loading, setLoading] = useState(false);
  return (
    <View>
      {loading && <ActivityIndicator size="large" color="#00ff00" />}
      {!loading && (
        <Text
          style={{
            color: 'black',
            fontSize: 50,
          }}>
          {starwarsCharacter}
        </Text>
      )}

      <Button
        onPress={() => {
          setLoading(true);
          fetch('https://swapi.dev/api/people/4')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setStarwarsCharacter(data.name);
              setLoading(false);
            })
            .catch(error => {
              setStarwarsCharacter('there was an error while fetching');
              setLoading(false);
            });
        }}
        title="Fetch star wars character"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
