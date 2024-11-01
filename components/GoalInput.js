import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const textInputHandler = (text) => {
    console.log(text)
    setGoal(text);
  };
  const addToGoals = () => {
    if (goal.length === 0) {
      return;
    } else {
      props.addToGoals(goal);
      props.switchModal();
    }
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <View>
              <TextInput placeholder="Get Stronger" onChangeText={textInputHandler} />
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.cancelButtonView, styles.buttons]}
                onPress={props.switchModal}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.addButtonView, styles.buttons]} onPress={addToGoals}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    padding: "5%",
    gap: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  cancelButtonView: {
    backgroundColor: "pink",
  },
  addButtonView: {
    backgroundColor: "purple",
  },
  buttonText: {
    color: "white",
  },
  buttons: {
    borderRadius: 5,
    padding: 10,
  },
});
