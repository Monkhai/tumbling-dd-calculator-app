import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import ResponsiveFontSize from 'react-native-responsive-fontsize';
import BonusButton from './BonusButton';

export interface Skill {
  skillIndex: number;
  value: number;
  name: string;
  bonus: number;
}

interface Props {
  presentors: Skill[];
  totalDD: number;
  handleBonus: (bonus: number, skillIndex: number) => void;
}

const SkillPresentor = ({ presentors, totalDD, handleBonus }: Props) => {
  const renderPresentors = (skill: Skill) => {
    return (
      <View key={skill.skillIndex} style={styles.container}>
        <Text style={styles.skillText}>{skill.skillIndex} </Text>
        <Text style={styles.skillText}>{skill.name} </Text>
        <Text style={styles.skillText}>{skill.value.toFixed(1)} </Text>
        <BonusButton skillIndex={skill.skillIndex} handleBonus={handleBonus} />
      </View>
    );
  };

  return (
    <View style={styles.meteContainer}>
      {presentors.map(renderPresentors)}
      <Text style={styles.totalDD}>{totalDD.toFixed(1)}</Text>
    </View>
  );
};

const respFontSize = () => {
  if (Dimensions.get('window').height <= 800) {
    return 24;
  } else {
    return 28;
  }
};

const styles = StyleSheet.create({
  meteContainer: {
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
  },
  skillText: {
    flex: 1,
    padding: 1,
    fontSize: respFontSize(),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'rgb(239, 207, 78)',
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
  },
  totalDD: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'rgb(239, 207, 78)',
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
    width: 350,
  },
});

export default SkillPresentor;
