import React from 'react';

import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'],
      todo: '',
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  addNewTodo = () => {
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, prevState.todo],
        todo: '',
      };
    });
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.list}>
          <FlatList
            data={this.state.todos}
            renderItem={({item, index}) => {
              return (
                <View style={styles.todos}>
                  <Text
                    style={{
                      textAlign: 'center',
                    }}>
                    {index + ' ' + item}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.add}>
          <TextInput
            style={styles.input}
            onChangeText={value => {
              this.setState({
                todo: value,
              });
            }}
            value={this.state.todo}
          />
          <Button
            onPress={() => {
              console.log('pressed me');
              this.addNewTodo();
            }}
            title="Add new todo"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blueviolet',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  list: {
    width: 300,
    flex: 2,
    backgroundColor: 'aqua',
  },
  add: {
    flex: 1,
    width: 300,
    backgroundColor: 'beige',
  },
  todos: {
    flex: 1,
    width: 300,
    backgroundColor: 'beige',
  },
});
