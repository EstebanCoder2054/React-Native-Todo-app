import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box One</Text>
      <Text style={styles.boxTwo}>Box Two</Text>
      <Text style={styles.boxThree}>Box Three</Text>
      <Text style={styles.boxFour}>Box Four</Text>
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: { backgroundColor: 'gold', padding: 10 },
  boxThree: { backgroundColor: 'coral', padding: 10 },
  boxFour: { backgroundColor: 'skyblue', padding: 10 }
});
