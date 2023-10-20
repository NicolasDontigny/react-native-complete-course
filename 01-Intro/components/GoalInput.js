import React, { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';

function GoalInput({ isVisible, addGoalHandler, closeModalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  function addGoalInputHandler() {
    addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
    closeModalHandler()
  }

  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.form}>
        <Image
          source={require('../assets/images/Survivor45.jpeg')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Enter your goal here'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='ADD GOAL!!!!' onPress={addGoalInputHandler} />
          </View>
          <View style={styles.button}>
            <Button title='CANCEL' onPress={closeModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 175,
    height: 110,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '60%',
    marginTop: 16,
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  }
})

export default GoalInput;
