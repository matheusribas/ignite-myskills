import React, { useState } from 'react';
import {
  StyleSheet, Platform, 
  SafeAreaView, 
  Text, TextInput, TouchableOpacity
 } from 'react-native';

import { ButtonNewSkill } from '../components/ButtonNewSkill';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
    setNewSkill('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Bem vindo, Matheus!
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Nova Skill'
        placeholderTextColor='#999'
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <ButtonNewSkill 
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        Minhas Skills
      </Text>

      {
        mySkills.map(skill => (
          <SkillCard 
            key={skill} 
            skill={skill}
          />
        ))
      }
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
    borderRadius: 12
  }
})