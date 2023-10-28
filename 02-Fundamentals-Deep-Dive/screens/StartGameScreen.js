import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return <View style={styles.inputContainer} >
    <TextInput />
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
  </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#72063c',
    // Elevation is an android-specific property only
    elevation: 4,
    // Shadow properties for ios only
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})
