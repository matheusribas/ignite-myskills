import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function ButtonNewSkill({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Nova Skill</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    cursor: 'pointer',
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})