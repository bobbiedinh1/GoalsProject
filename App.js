import React from "react";
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [enterGoalText, setEnterGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  useEffect(() => {
    console.log(courseGoals);
  }, [courseGoals]);
  

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  }

  // function addGoalHandler(){
  //   setCourseGoals([...courseGoals, enterGoalText]);
  // }
  function addGoalHandler(){
    setCourseGoals((currentCourseGoals)=> [
      ...currentCourseGoals,
      enterGoalText
    ])
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your course goal!"
              style={styles.textInput}
              onChangeText={goalInputHandler}
            />
            <Button onPress={addGoalHandler} title="Add Your Goal" />
          </View>
          <View style={styles.listView}>
              {courseGoals.map((courseGoal)=> <Text>{courseGoal}</Text>)}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "blue", // Background color for SafeAreaView
  },
  appContainer: {
    flex: 1,
    gap: 30,
    backgroundColor: "green",
    justifyContent: "flex-start", // Changed from 'start' to 'flex-start'
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    padding: 40,
    borderBottomWidth: 1,
    backgroundColor: "#cccccc",
    justifyContent: 'center'
  },
  textInput: {
    // maxWidth: "60%",
    // minWidth: "60%",
    width: '70%',
    borderWidth: 1,
    placeholderTextColor: "#888",
  },
});
