import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View key={props.id} style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: "linen",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
