import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../components/Button';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button style={styles.button} onPress={() => onChangeTime(10)} text="10" />
      <Button style={styles.button} onPress={() => onChangeTime(15)} text="15" />
      <Button style={styles.button} onPress={() => onChangeTime(20)} text="20" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  button: {
    width: 100,
    borderWidth: 5
  },
});
