import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../services/colors';

interface Props {
  onClear: () => void;
  onDelete: () => void;
}

const ClearAndDeleteBtns = ({ onClear, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDelete}>
        <Feather name="delete" size={hp('5%')} color={colors.gold} />
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
    borderColor: colors.gold,
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
    color: colors.gold,
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default ClearAndDeleteBtns;
