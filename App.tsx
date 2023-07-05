import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import SkillBtnGrid, { Button } from './components/SkillBtnGrid';
import SkillPresentor, { Skill } from './components/SkillPresentor';
import colors from './services/colors';

export default function App() {
  const [totalDD, setTotalDD] = useState(0.0);
  const [index, setIndex] = useState(1);
  const [resetDropdown, setResetDropdown] = useState(true);

  //presentors state!
  const [presentors, setPresentors] = useState<Skill[]>([
    { skillIndex: 1, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 2, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 3, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 4, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 5, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 6, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 7, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 8, value: 0.0, name: '--', bonus: 0.0 },
  ]);
  const OGPresentors = [
    { skillIndex: 1, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 2, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 3, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 4, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 5, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 6, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 7, value: 0.0, name: '--', bonus: 0.0 },
    { skillIndex: 8, value: 0.0, name: '--', bonus: 0.0 },
  ];
  //calculate Total DD!
  useEffect(() => {
    // Calculate the sum of values in the presentors array
    const totalValue = presentors.reduce((total, presentor) => total + presentor.value, 0);
    const totalBonus = presentors.reduce((total, presentor) => total + presentor.bonus, 0);
    const calculatedTotalDD = totalValue + totalBonus;
    setTotalDD(calculatedTotalDD);
  }, [presentors]);

  const addSkill = (button: Button) => {
    if (index <= 8) {
      setPresentors(
        presentors.map((presentor) =>
          presentor.skillIndex === index
            ? { ...presentor, value: button.value, name: button.skill }
            : presentor
        )
      );
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const deleteSkill = () => {
    setPresentors(
      presentors.map((presentor) =>
        presentor.skillIndex === index - 1
          ? { ...presentor, value: 0.0, name: '--', bonus: 0.0 }
          : presentor
      )
    );
    setIndex(() => (index > 1 ? index - 1 : 1));
  };

  const clearSkills = () => {
    setPresentors(OGPresentors);
    setIndex(1);
    setResetDropdown((toggle) => !toggle);
  };

  const handleBonus = (bonus: number, skillIndex: number) => {
    setPresentors(
      presentors.map((presentor) =>
        presentor.skillIndex === skillIndex ? { ...presentor, bonus: bonus } : presentor
      )
    );
  };

  //RETURN//
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ borderWidth: 1 }}>
        <SkillPresentor
          resetDropdown={resetDropdown}
          handleBonus={(bonus, skillIndex) => handleBonus(bonus, skillIndex)}
          totalDD={totalDD}
          presentors={presentors}
        />
      </View>
      <View style={{ borderWidth: 1 }}>
        <SkillBtnGrid
          onDelete={deleteSkill}
          onClear={clearSkills}
          onClick={(button) => addSkill(button)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0,
  },
});
