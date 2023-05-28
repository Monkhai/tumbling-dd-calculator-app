import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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

const styles = StyleSheet.create({
  meteContainer: {
    backgroundColor: '#323b40',
    marginBottom: hp('1%'),
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
    width: wp('85'),
  },
  container: {
    flexDirection: 'row',
  },
  skillText: {
    flex: 1,
    padding: 1,
    fontSize: hp('3.5%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'rgb(239, 207, 78)',
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
  },
  totalDD: {
    fontSize: hp('3.5%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'rgb(239, 207, 78)',
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
  },
});

export default SkillPresentor;
