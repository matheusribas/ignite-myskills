import React from 'react';
import {
  StyleSheet, Platform, 
  SafeAreaView, 
  Text, TextInput, TouchableOpacity
 } from 'react-native';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Bem vindo, Matheus!
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Nova Skill'
        placeholderTextColor='#555'
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text
          style={styles.buttonText}
        >Nova Skill</Text>
      </TouchableOpacity>

      <Text
        style={[styles.title, {
          marginTop: 50
        }]}
      >
        Minhas Skills
      </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    cursor: 'pointer',
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})