import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
  };

  const delGoalHandler = () => {
    setCourseGoals((prevGoals) => []);
    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        inputHandler={goalInputHandler}
        actValue={enteredGoal}
        addGoal={addGoalHandler}
        delGoal={delGoalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} />
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
