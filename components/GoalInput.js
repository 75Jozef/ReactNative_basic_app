import React from "react";
import { TextInput, StyleSheet, Button, View, Modal } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={props.inputHandler}
          placeholder="Course Goal"
          style={styles.input}
          value={props.actValue}
        />
        <Button title="ADD" onPress={props.addGoal} />
        <Button color="red" title="DEL" onPress={props.delGoal} />
        <Button color="green" title="CLS" onPress={props.clsScr} />
      </View>
    </Modal>
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
    margin: 20,
  },
});

export default GoalInput;
