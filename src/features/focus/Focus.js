import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Button } from '../../components/Button';
import { fontSizes, spaces } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [focusItem, setFocusItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <TextInput
          style={styles.textInput}
          value={focusItem}
          onChange={({ nativeEvent: { text } }) => setFocusItem(text)}
          theme={{colors: {primary: 'grey'}}}
        />
        <View style={styles.button}>
          <Button height="70" width="200" text="Let's Focus" onPress={() => addSubject(focusItem)} />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: spaces.md,
    justifyContent: 'center',
  },

  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput: {
    borderRadius: 30,
    outline: 'none',
    overflow: "hidden"
  },

  button: {
    margin: spaces.xl,
    justifyContent: "center",
    alignItems: "center"
  }
});
