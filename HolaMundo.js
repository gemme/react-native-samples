import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import './HolaMundo.css';

// camel case -> Camel Case
export class HolaMundo extends React.Component {
  constructor(props) {
    super(props);
    // objetos en javascript {}

    this.state = {
      name: ' Ernesto',
      count: 0,
      // other properties
    };
  }

  // lifecycle hooks
  componentDidMount() {
    console.log('componentDidMount');

    // memory leak
    setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
    fetch('https://swapi.dev/api/people/1')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(JSON.stringify(data));

        this.setState({
          name: data.name,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    console.log('render');
    // JSX
    return (
      <View style={styles.main}>
        <View>
          <Text style={styles.text}>{'Hello World' + this.state.name}</Text>
        </View>
        <Text style={styles.text}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: 500,
    width: 500,
    backgroundColor: 'red',
    // border: '20px solid pink',
    borderColor: 'pink',
    borderWidth: 50,
    fontSize: 50,
  },
  text: {
    fontSize: 50,
  },
});
// cuantos tipos de componentes existen
// clase - state
// funcional - no tiene estato

// que es el estado

// Todos los componentes tienen properties

// cuantos tipos de eventos existen en JS
// eventos de usuario
// eventos timers - settimeout
// eventos network - fetch
