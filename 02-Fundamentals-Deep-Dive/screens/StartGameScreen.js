import { Alert, TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors'
import Title from '../components/ui/Title';

function StartGameScreen({ onNumberPicked }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (value) => {
    setEnteredNumber(value)
  }

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Please enter a valid number between 0 and 99',
        [{
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        }]
      );

      return;
    }

    onNumberPicked(chosenNumber);
  }

  return <View style={styles.inputContainer} >
    {/* Text Input value is ALWAYS of type string, no matter the keyboardType */}
    <Title>Guess my Number</Title>
    <TextInput
      inputMode='numeric'
      keyboardType='number-pad'
      autoCapitalize='none'
      autoCorrect={false}
      maxLength={2}
      style={styles.numberInput}
      onChangeText={numberInputHandler}
      value={enteredNumber}
    />
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary700,
    // Elevation is an android-specific property only
    elevation: 4,
    // Shadow properties for ios only
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
})
