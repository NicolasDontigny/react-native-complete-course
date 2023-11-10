import Colors from '../../constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogItem = ({ number, roundNumber }) => {
  return <View style={styles.logContainer}>
    <Text style={styles.logText}>Round #{roundNumber}</Text>
    <Text style={styles.logText}>Your phone guessed the number <Text style={styles.numberText}>{number}</Text></Text>
  </View>
}

export default LogItem;

const styles = StyleSheet.create({
  logContainer: {
    padding: 12,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    opacity: 0.8,
    marginVertical: 8,
  },
  logText: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: Colors.accent500,
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
  }
})
