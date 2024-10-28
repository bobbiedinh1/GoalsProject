import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!'></TextInput>
        <Button title='Add Your Goal'></Button>
      </View>
      <View>
        <Text>List of goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    gap: 30,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#cccccc',
    width: '100',
  },
  textInput: {
    flexGrow: 0,
  }
});
