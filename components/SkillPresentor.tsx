import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Row, Rows, Table } from 'react-native-table-component';
import colors from '../services/colors';
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
  resetDropdown: boolean;
}

const SkillPresentor = ({ presentors, totalDD, handleBonus, resetDropdown }: Props) => {
  const headers = ['No.', 'Skill', 'DD', 'Bonus'];

  const rowData = presentors.map((skill) => {
    return [
      <Text style={styles.skillText}>{skill.skillIndex}</Text>,
      <Text style={styles.skillText}>{skill.name}</Text>,
      <Text style={styles.skillText}>{skill.value.toFixed(1)}</Text>,
      <BonusButton
        resetDropdown={resetDropdown}
        skillIndex={skill.skillIndex}
        handleBonus={handleBonus}
      />,
    ];
  });

  const totalDdData = [[<Text style={styles.skillText}>{totalDD.toFixed(1)}</Text>]];

  return (
    <View style={styles.meteContainer}>
      <Table borderStyle={{ borderColor: colors.gold, borderWidth: 2 }}>
        <Row data={headers} textStyle={styles.skillText} />
        <Rows data={rowData} />
        <Rows data={totalDdData} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  meteContainer: {
    backgroundColor: colors.grey,
    marginBottom: hp('1%'),
    width: wp('85'),
  },
  container: {
    flexDirection: 'row',
  },
  skillText: {
    padding: 1,
    fontSize: hp('3%'),
    textAlign: 'center',
    color: colors.gold,
    backgroundColor: colors.grey,
  },
  totalDD: {
    fontSize: hp('3%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.gold,
    borderColor: colors.gold,
  },
});

export default SkillPresentor;
