import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ pickedNumber }) {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return <View style={styles.gameScreenContainer}>
    <Title>Opponent's Guess</Title>
    <NumberContainer>{currentGuess}</NumberContainer>
    <View>
      <Text>Higher or lower?</Text>
      {/* + - */}
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
})
