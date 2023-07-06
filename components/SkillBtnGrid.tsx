import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../services/colors';

export interface Button {
  skill: string;
  value: number;
}

interface Props {
  onClick: (button: Button) => void;
  onClear: () => void;
  onDelete: () => void;
}

const SkillBtnGrid = ({ onClick, onClear, onDelete }: Props) => {
  const buttons: Button[] = [
    { skill: '(', value: 0.1 },
    { skill: 'f', value: 0.1 },
    { skill: '^', value: 0.2 },
    { skill: '-o', value: 0.5 },
    { skill: '-<', value: 0.6 },
    { skill: '-/', value: 0.6 },
    { skill: '1/', value: 0.7 },
    { skill: '.1', value: 0.8 },
    { skill: '2/', value: 0.9 },
    { skill: '3/', value: 1.1 },
    { skill: '4/', value: 1.3 },
    { skill: '--o', value: 2.0 },
    { skill: '--<', value: 2.2 },
    { skill: '--/', value: 2.4 },
    { skill: '2-o', value: 2.4 },
    { skill: '-2o', value: 2.4 },
    { skill: '2-<', value: 2.6 },
    { skill: '2-/', value: 2.8 },
    { skill: '-2/', value: 2.8 },
    { skill: '220', value: 3.2 },
    { skill: '22/', value: 3.6 },
    { skill: '23o', value: 3.8 },
    { skill: '23/', value: 4.2 },
    { skill: '24o', value: 4.4 },
    { skill: '24/', value: 4.8 },
    { skill: '44/', value: 6.4 },
    { skill: '---o', value: 4.5 },
    { skill: '---<', value: 5.1 },
    { skill: '---/', value: 5.7 },
    { skill: '2--.0', value: 6.3 },
    { skill: '2--.<', value: 6.9 },
  ];

  const renderBtn = (button: Button) => {
    return (
      <TouchableOpacity
        accessibilityLabel={button.skill}
        style={styles.button}
        onPress={() => onClick(button)}
        key={button.skill}
      >
        <Text style={styles.buttonText}>{button.skill}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.buttons}>
      {buttons.map(renderBtn)}

      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Feather name="delete" size={hp('3.5%')} color={colors.gold} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onClear}>
        <Text style={styles.clearButtonText}>AC</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.grey,
    borderWidth: 2,
    borderColor: colors.gold,
    borderRadius: 50,
    margin: 3,
    width: wp('14%'),
    height: wp('14%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: hp('2%'),
    color: '#efcf4e',
  },
  clearButtonText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#efcf4e',
  },
});

export default SkillBtnGrid;
