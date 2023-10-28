import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed
          ? [
            styles.buttonInnerContainer,
            styles.pressed
          ]
          : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
    borderColor: 'orange',
    borderWidth: 0,
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    color: '#ddb52f',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
})
