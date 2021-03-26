import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { Countdown } from '../../components/Countdown';
import { Button } from '../../components/Button';
import { Timing } from './Timing';
import { fontSizes, spaces } from '../../utils/sizes';
import { colors } from '../../utils/colors';

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject, onTimerEnd, onCancel }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const onChangeTime = (time) => {
    setMinutes(time);
    setProgress(1);
    setIsPaused(true);
  };

  const vibrate = () => {
    const interval = setInterval(() => Vibration.vibrate(), 1000);
    setTimeout(() => clearInterval(interval), 10000);
  };

  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsPaused(true);
    onTimerEnd();
    vibrate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={isPaused}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <ProgressBar progress={progress} color="#9254D6" style={{ height: 15 }} />
      <View style={{ paddingTop: spaces.xxl }}>
        <Text style={styles.title}>Focusing on</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={onChangeTime} />
      </View>
      <View style={styles.pauseButton}>
        {isPaused ? (
          <Button text="RESUME" onPress={() => setIsPaused(false)} />
        ) : (
          <Button text="PAUSE" onPress={() => setIsPaused(true)} />
        )}
      </View>
      <View style={styles.cancelButton}>
        <Button onPress={() => onCancel()} text="CANCEL" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  countdown: {
    alignItems: 'center',
  },

  title: {
    color: colors.white,
    textAlign: 'center',
  },

  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },

  buttonWrapper: {
    flex: 0.5,
  },

  pauseButton: {
    alignItems: 'center',
  },

  cancelButton: {
    alignItems: 'center',
    paddingTop: 15,
  },
});
