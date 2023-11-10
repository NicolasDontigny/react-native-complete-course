import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  useEffect(() => {
    console.log('USE EFFECT');
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        console.log('FINALLY:');
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
  }

  const incrementRoundHandler = () => setGuessRounds(previousNumber => previousNumber + 1)

  const gameOverHandler = () => {
    setGameIsOver(true)
  }

  const startNewGameHandler = () => {
    setGameIsOver(false)
    setUserNumber(null)
  }

  let screen = <StartGameScreen onNumberPicked={pickedNumberHandler} />;

  if (gameIsOver) {
    screen = <GameOverScreen
      startNewGame={startNewGameHandler}
      guessedNumber={userNumber}
      numberOfRounds={guessRounds}
    ></GameOverScreen>
  } else if (userNumber) {
    screen = <GameScreen pickedNumber={userNumber} onGameOver={gameOverHandler}></GameScreen>
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
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
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
