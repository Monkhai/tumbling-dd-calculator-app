import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
interface Props {
  onClear: () => void;
  onDelete: () => void;
}

const ClearAndDeleteBtns = ({ onClear, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDelete}>
        <Feather name="delete" size={respDeleteBtnSize()} color={'rgb(239, 207, 78)'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.border} onPress={onClear}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>AC</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const respFontSize = () => {
  if (Dimensions.get('window').scale <= 2.0) {
    return 24;
  } else {
    return 30;
  }
};

const respDeleteBtnSize = () => {
  if (Dimensions.get('window').scale <= 2) {
    return 48;
  } else {
    return 64;
  }
};

const respClearBtnSize = () => {
  if (Dimensions.get('window').scale <= 2) {
    return 38;
  } else {
    return 48;
  }
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
    width: 80,
    height: respClearBtnSize(),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgb(239, 207, 78)',
    fontSize: respFontSize(),
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default ClearAndDeleteBtns;
