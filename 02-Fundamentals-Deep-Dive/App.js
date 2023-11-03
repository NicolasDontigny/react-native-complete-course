import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onNumberPicked={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen pickedNumber={userNumber}></GameScreen>
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={['#4e0329', Colors.accent500]}
    >
      <ImageBackground
        // @ts-ignore
        source={require('./assets/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.25 }}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
