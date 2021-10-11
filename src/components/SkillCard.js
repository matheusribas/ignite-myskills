import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.9}
    >
      <Text style={styles.skill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20
  },
  skill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
})