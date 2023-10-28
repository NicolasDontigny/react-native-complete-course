import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (value) => {
    setEnteredNumber(value)
  }

  const resetHandler = () => {
    console.log('RESET');
  }

  const confirmHandler = () => {
    console.log('CONFIRM:', enteredNumber);
  }

  return <View style={styles.inputContainer} >
    {/* Text Input value is ALWAYS of type string, no matter the keyboardType */}
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
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
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
    backgroundColor: '#3b021f',
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
