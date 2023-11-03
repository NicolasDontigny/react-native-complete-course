import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { StyleSheet, View } from 'react-native';

function GameOverScreen({ startNewGame }) {
  return <View style={styles.gameOverContainer}>
    <Title>GAME OVER</Title>

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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    marginTop: 32,
  }
})
