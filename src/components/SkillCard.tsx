import React from 'react';
import { 
  StyleSheet, Text, 
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.buttonSkill}
      {...rest}
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