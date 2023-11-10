import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { Text, Image, StyleSheet, View } from 'react-native';
import React from 'react';

function GameOverScreen({ startNewGame, numberOfRounds, guessedNumber }) {
  return <View style={styles.gameOverContainer}>
    <Title>GAME OVER!</Title>

    <View style={styles.imageContainer}>
      <Image source={require('../assets/success.png')} style={styles.image} />
    </View>

    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlightedText}>{numberOfRounds}</Text> rounds to guess the number <Text style={styles.highlightedText}>{guessedNumber}</Text>
    </Text>

    <View style={styles.button}>
      <PrimaryButton onPress={startNewGame}>Start New Game!</PrimaryButton>
    </View>
  </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    marginVertical: 22,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  button: {
    marginTop: 32,
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
  },
  highlightedText: {
    fontFamily: 'open-sans-bold',
    fontSize: 28,
    color: Colors.primary500,
  }
})
