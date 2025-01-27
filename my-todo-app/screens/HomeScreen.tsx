import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now().toString(), title: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleTodo(item.id)}
            onRemove={() => removeTodo(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;