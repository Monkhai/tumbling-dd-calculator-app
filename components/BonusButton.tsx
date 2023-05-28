import { View, StyleSheet, Dimensions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, { useRef } from 'react';

const bonuses: number[] = [
  0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8,
  1.9, 2.0,
];

interface Props {
  handleBonus: (bonus: number, skillIndex: number) => void;
  skillIndex: number;
}

const BonusButton = ({ handleBonus, skillIndex }: Props) => {
  const dropdownRef = useRef<SelectDropdown>(null);

  return (
    <View>
      <SelectDropdown
        ref={dropdownRef}
        defaultButtonText=" "
        data={bonuses}
        onSelect={(selectedItem) => handleBonus(selectedItem, skillIndex)}
        buttonTextAfterSelection={(selectedItem) => {
          if (selectedItem === 0.0) {
            return '';
          } else {
            return selectedItem.toFixed(1);
          }
        }}
        rowTextForSelection={(item) => {
          return item.toFixed(1);
        }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdownContainer}
        dropdownOverlayColor="transparent"
        rowTextStyle={styles.dropdownRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    flex: 1,
    width: 90,
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(239, 207, 78)',
  },
  dropdownButtonText: {
    color: 'rgb(239, 207, 78)',
    fontSize: 30,
  },
  dropdownContainer: {
    backgroundColor: '#323b40',
    borderWidth: 1,
    borderColor: 'rgb(239, 207, 78)',
  },
  dropdownRow: {
    color: 'rgb(239, 207, 78)',
  },
});

export default BonusButton;
