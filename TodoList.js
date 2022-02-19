import React from 'react';

import {View, Text, Button, TextInput, FlatList} from 'react-native';

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
      <View>
        <View>
          <FlatList
            data={this.state.todos}
            renderItem={({item, index}) => {
              // console.log(item);
              // console.log(index);
              return (
                <Text
                  style={{
                    color: 'blue',
                  }}>
                  {index + ' ' + item}
                </Text>
              );
            }}
          />
        </View>
        <TextInput
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
    );
  }
}

/*
<input
          type="text"
          value={this.state.todo}
          onChange={event => {
            // console.log(event.target.value);
            this.setState({
              todo: event.target.value,
            });
          }}
        />
        <button onClick={this.addNewTodo}>Agregar</button>
        */
