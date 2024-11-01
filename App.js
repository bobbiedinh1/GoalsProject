import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {

  const [showModal, setModal] = useState(false);
  
  const [goals, setGoals] = useState([]);

  const switchModal = () => {
    setModal(!showModal);
  };

  const addToGoals = (goal) => {

    const newGoal = {"goal": goal, id: (goals.length+1).toString()};
    setGoals((goals)=>[
      ...goals, newGoal
    ]);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <TouchableOpacity style={styles.addButtonView} onPress={switchModal}>
                <Text style={styles.buttonText}>ADD TO LIST</Text>
          </TouchableOpacity>
          <GoalInput 
            showModal={showModal} 
            switchModal={switchModal}
            addToGoals={addToGoals} 
          />
          <View>
            <FlatList
              data={goals}
              renderItem={(itemData) => <GoalItem goal={itemData.item.goal} />}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "start",
    gap: 15,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "blue", // Safe area should be blue
  },
  addButtonView: {
    backgroundColor: 'teal',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center'
  }
});

const dummyData = [
  {
    goal: "goal 1",
    id: 1,
  },
  {
    goal: "goal 2",
    id: 2,
  },
  {
    goal: "goal 3",
    id: 3,
  },
  {
    goal: "goal 4",
    id: 4,
  },
  {
    goal: "goal 5",
    id: 5,
  },
  {
    goal: "goal 5",
    id: 6,
  },
  {
    goal: "goal 5",
    id: 7,
  },
  {
    goal: "goal 5",
    id: 8,
  },
  {
    goal: "goal 5",
    id: 9,
  },
  {
    goal: "goal 5",
    id: 10,
  },
  {
    goal: "goal 5",
    id: 11,
  },
  {
    goal: "goal 5",
    id: 12,
  },
  {
    goal: "goal 5",
    id: 13,
  },
];