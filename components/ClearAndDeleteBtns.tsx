import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  onClear: () => void;
  onDelete: () => void;
}

const ClearAndDeleteBtns = ({ onClear, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDelete}>
        <Feather name="delete" size={hp('5%')} color={'rgb(239, 207, 78)'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.border} onPress={onClear}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>AC</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 150,
  },
  border: {
    borderColor: 'rgb(239, 207, 78)',
    borderWidth: 5,
    borderRadius: 9.5,
    width: wp('13%'),
    height: hp('4%'),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgb(239, 207, 78)',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default ClearAndDeleteBtns;
