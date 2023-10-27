import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Flexbox from './Flexbox';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        id: (Math.random() * 10000).toString(),
        name: enteredGoalText,
      },
    ])
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const closeModalHandler = () => {
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.id !== goalId))
  }

  console.log('courseGoals:', courseGoals);

  return (
    <>
      <StatusBar style='light' />

      <View style={styles.container}>
        <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
        {/* <View>
        <Text style={styles.survivor}>Survivor is AWESOMEEEE!</Text>
      </View>
      <Text style={{ margin: 24, padding: 12, borderColor: 'red', borderWidth: 2 }}>Damn that last tribal though!</Text>
      <Button title='Tap me !' /> */}

        <GoalInput
          addGoalHandler={addGoalHandler}
          closeModalHandler={closeModalHandler}
          isVisible={modalIsVisible}
        />

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
              // ITEM DATA
              // {
              //   index: number,
              //   item: TItem
              // }
              return <GoalItem item={itemData.item} deleteGoalHandler={deleteGoalHandler} />
            }}
          />
        </View>

        {/* <Flexbox /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
  goalsContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 36,
  },
  // goalItem: {
  //   margin: 8,
  //   padding: 8,
  //   borderRadius: 6,
  //   backgroundColor: '#5e0acc',
  // },
  // goalText: {
  //   color: 'white',
  // }
});
