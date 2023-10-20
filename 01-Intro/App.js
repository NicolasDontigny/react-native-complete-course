import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Flexbox from './Flexbox';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        id: (Math.random() * 10000).toString(),
        name: enteredGoalText,
      },
    ])
  }

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.survivor}>Survivor is AWESOMEEEE!</Text>
      </View>
      <Text style={{ margin: 24, padding: 12, borderColor: 'red', borderWidth: 2 }}>Damn that last tribal though!</Text>
      <Button title='Tap me !' /> */}

      <View style={styles.form}>
        <TextInput style={styles.textInput} placeholder='Enter your goal here' onChangeText={goalInputHandler} />
        <Button title='ADD GOAL!!!!' onPress={addGoalHandler} />
      </View>

      <View style={styles.container}>
        <ScrollView>
          {courseGoals.map(goal => (
            <View key={goal.id} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.container}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, _index) => item.id}
          renderItem={(itemData) => {
            console.log('itemData:', itemData);
            // ITEM DATA
            // {
            //   index: number,
            //   item: TItem
            // }
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.name}</Text>
              </View>
            )
          }}
        />
      </View>

      {/* <Flexbox /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 36,
    padding: 24,
  },
  survivor: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 36,
  },
  form: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '60%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 36,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});
