import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import LogItem from '../components/game/LogItem';

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

  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      Alert.alert("CONGRATULATIONS!!!", 'You have guessed the correct number', [
        { text: 'Great!', style: 'default', onPress: onGameOver.bind(this, guessRounds) },
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

      setCurrentGuess(oldCurrentGuess => {
        const newGuessNumber = generateRandomBetween(oldCurrentGuess + 1, maxGuess)
        setGuessRounds(previousGuessRounds => [...previousGuessRounds, newGuessNumber])
        return newGuessNumber
      })
    } else {
      setMaxGuess(currentGuess - 1)

      setCurrentGuess(oldCurrentGuess => {
        const newGuessNumber = generateRandomBetween(minGuess, oldCurrentGuess - 1)
        setGuessRounds(previousGuessRounds => [newGuessNumber, ...previousGuessRounds])
        return newGuessNumber
      })
    }
  }

  const numberOfRounds = guessRounds.length

  return <View style={styles.gameScreenContainer}>
    <Title>Opponent's Guess</Title>
    <NumberContainer>{currentGuess}</NumberContainer>
    <View style={styles.higherLowerContainer}>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>
          <Ionicons name="md-remove" size={24} color="white" />
        </PrimaryButton>
      </View>
      <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>
          <Ionicons name="md-add" size={24} color="white" />
        </PrimaryButton>
      </View>
    </View>
    <View style={styles.listContainer}>
      <FlatList
        data={guessRounds}
        renderItem={({ item, index }) => (
          <LogItem number={item} roundNumber={numberOfRounds - index} />
        )}
        keyExtractor={item => item}
      ></FlatList>
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
  },
  listContainer: {
    flex: 1,
    paddingVertical: 8,
  }
})
