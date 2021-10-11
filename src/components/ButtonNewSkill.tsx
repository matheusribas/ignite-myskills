import React from 'react';
import { 
  StyleSheet, Text, 
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

interface ButtonNewSkillProps extends TouchableOpacityProps {
  title: string;
};

export function ButtonNewSkill({ title, ...rest } : ButtonNewSkillProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
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