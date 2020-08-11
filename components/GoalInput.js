import React from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={props.inputHandler}
        placeholder="Course Goal"
        style={styles.input}
        value={props.actValue}
      />
      <Button title="ADD" onPress={props.addGoal} />
      <Button color="red" title="DEL" onPress={props.delGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "60%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 5,
  },
});

export default GoalInput;
