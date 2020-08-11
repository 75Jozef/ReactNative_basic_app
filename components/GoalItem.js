import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.oneDelete}>
      <View key={props.id} style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
