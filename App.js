import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

//components
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
// import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'sacar al perroooo', key: '1' },
    { text: 'aprender RN', key: '2' },
    { text: 'Hacer café', key: '3' },
    { text: 'escuchar unstoppable', key: '4' },
    { text: 'resolver incidencias :v', key: '5' },
    { text: 'resolver incidencias x2 :v', key: '6' },
    { text: 'resolver incidencias x3 :v', key: '7' },
    { text: 'resolver incidencias x4 :v', key: '8' },
    { text: 'resolver incidencias x5 :v', key: '9' }
  ]);

  const handleDelete = key => {
    setTodos(previousTodos => {
      return previousTodos.filter(todo => todo.key != key);
    });
  };

  const handleAddTodo = text => {
    if (text.length > 3) {
      setTodos(previousTodos => {
        return [
          {
            text: text,
            key: Math.random().toString()
          },
          ...previousTodos
        ];
      });
    } else {
      Alert.alert('Oops!!', 'To-dos deben ser mínimo de 3 caracteres', [
        { text: 'Ok', onPress: () => console.log('alerta cerrada') }
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />

        <View style={styles.content}>
          {/* to do form */}
          <AddTodo handleAddTodo={handleAddTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handleDelete={handleDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    flex: 1
    // backgroundColor: 'coral'
  },
  list: {
    marginTop: 40,
    flex: 1
    // backgroundColor: 'skyblue'
  }
});
