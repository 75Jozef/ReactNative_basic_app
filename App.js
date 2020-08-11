import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
    setIsAddMode(false);
  };

  const oneDeleteHandler = (goalId) => {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== goalId)
    );
  };

  const delGoalHandler = () => {
    setCourseGoals((prevGoals) => []);
    setEnteredGoal("");
    setIsAddMode(false);
  };

  const clearScreen = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        inputHandler={goalInputHandler}
        actValue={enteredGoal}
        addGoal={addGoalHandler}
        delGoal={delGoalHandler}
        visible={isAddMode}
        clsScr={clearScreen}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            oneDelete={() => oneDeleteHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
