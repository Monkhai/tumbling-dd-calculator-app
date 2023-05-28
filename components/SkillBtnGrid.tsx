import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Button {
  skill: string;
  value: number;
}

interface Props {
  onClick: (button: Button) => void;
}

const SkillBtnGrid = ({ onClick }: Props) => {
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
      <TouchableOpacity style={styles.button} onPress={() => onClick(button)} key={button.skill}>
        <Text style={styles.buttonText}>{button.skill}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.buttons}>{buttons.map(renderBtn)}</View>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#323b40',
    borderWidth: 2,
    borderColor: 'rgb(239, 207, 78)',
    borderRadius: 50,
    margin: 3,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#efcf4e',
  },
});

export default SkillBtnGrid;
