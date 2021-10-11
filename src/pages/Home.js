import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Platform, 
  SafeAreaView, // Escapa a status bar
  Text, TextInput,
  FlatList
 } from 'react-native';

import { ButtonNewSkill } from '../components/ButtonNewSkill';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
    setNewSkill('')
  }

  useEffect(() =>{
    const currentHours = new Date().getHours();

    if (currentHours < 12) setGreeting('Bom dia');
    else if (currentHours >= 12 && currentHours < 18) setGreeting('Boa tardeson');
    else setGreeting('Boa noite')
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {greeting}, Matheus!
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
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 60 : 40
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