import { View, StyleSheet, Animated, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Feather } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../services/colors';

const bonuses: number[] = [
  0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8,
  1.9, 2.0,
];

interface Props {
  handleBonus: (bonus: number, skillIndex: number) => void;
  skillIndex: number;
  resetDropdown: boolean;
}

const BonusButton = ({ handleBonus, skillIndex, resetDropdown }: Props) => {
  const dropdownRef = useRef<SelectDropdown>(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    dropdownRef.current.reset();
    setIsSelected(false);
  }, [resetDropdown]);

  return (
    <View>
      <SelectDropdown
        ref={dropdownRef}
        data={bonuses}
        defaultButtonText=" "
        renderDropdownIcon={() =>
          !isSelected ? <Feather name="chevron-down" color={colors.gold} /> : null
        }
        onSelect={(selectedItem) => handleBonus(selectedItem, skillIndex)}
        buttonTextAfterSelection={(selectedItem) => {
          if (selectedItem === 0.0) {
            setIsSelected(false);
            return '';
          } else {
            setIsSelected(true);
            return selectedItem.toFixed(1);
          }
        }}
        rowTextForSelection={(item) => {
          return item.toFixed(1);
        }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdownContainer}
        dropdownOverlayColor={'false'}
        rowTextStyle={styles.dropdownTxtRow}
        rowStyle={styles.rowStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    width: wp('20'),
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.gold,
    height: 'auto',
  },
  dropdownButtonText: {
    color: colors.gold,
    fontSize: hp('3%'),
  },
  dropdownContainer: {
    backgroundColor: colors.grey,
    borderWidth: 2,
    borderColor: colors.gold,
  },
  dropdownTxtRow: {
    color: colors.gold,
  },
  rowStyle: {
    height: hp('4%'),
    color: colors.gold,
    borderBottomWidth: 1,
    borderBottomColor: colors.gold,
  },
});

export default BonusButton;
