import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

const generateRandomBetween = (min, max, exclude = null) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (exclude && rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ pickedNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [maxGuess, setMaxGuess] = useState(100);
  const [minGuess, setMinGuess] = useState(1);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      Alert.alert("CONGRATULATIONS!!!", 'You have guessed the correct number', [
        { text: 'Great!', style: 'default', onPress: onGameOver },
      ])
    }
  }, [pickedNumber, currentGuess])

  const nextGuessHandler = (higher) => {
    if (
      (higher && pickedNumber < currentGuess) ||
      (!higher && pickedNumber > currentGuess)
    ) {
      Alert.alert("Don't lie!", 'You know this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    if (higher) {
      setMinGuess(currentGuess + 1)
      setCurrentGuess(oldCurrentGuess => generateRandomBetween(oldCurrentGuess, maxGuess))
    } else {
      setMaxGuess(currentGuess - 1)
      setCurrentGuess(oldCurrentGuess => generateRandomBetween(minGuess, oldCurrentGuess))
    }
  }

  return <View style={styles.gameScreenContainer}>
    <Title>Opponent's Guess</Title>
    <NumberContainer>{currentGuess}</NumberContainer>
    <View style={styles.higherLowerContainer}>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>-</PrimaryButton>
      </View>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>+</PrimaryButton>
      </View>
    </View>
    <View>
      <Text>LOG ROUNDS</Text>
    </View>
  </View>
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 32,
    alignItems: 'stretch',
  },
  higherLowerContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  }
})
