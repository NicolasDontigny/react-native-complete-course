import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ item, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler.bind(this, item.id)}
        android_ripple={{ color: '#dddddd' }}
        // style function called every time the pressable state changes
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.name}</Text>
      </Pressable>
    </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  }
});
