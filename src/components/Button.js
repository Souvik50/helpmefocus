import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spaces } from '../utils/sizes';

export const Button = ({
  style = {},
  textStyle = {},
  height,
  width,
  ...props
}) => {
  return (
    <View>
    <TouchableOpacity style={[styles.border, style]} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 30 ,
    width: 200 ,
    height: 70 ,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: spaces.lg,
  }, 
})
