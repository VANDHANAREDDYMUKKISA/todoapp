import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TodoItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View style={[styles.checkbox, completed && styles.checked]} />
      <Text style={[styles.title, completed && styles.completed]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#4caf50',
  },
  title: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoItem;