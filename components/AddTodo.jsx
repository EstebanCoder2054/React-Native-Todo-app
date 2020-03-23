import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState('');

  const handleChangeText = txt => {
    setText(txt);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='agrega una tarea...'
        onChangeText={txt => handleChangeText(txt)}
      />

      <Button onPress={() => handleAddTodo(text)} title='Add Todo' />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 11,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
