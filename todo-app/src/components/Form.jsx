import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
const Form = ({ todos }) => {
  const [inputData, setInputData] = useState("");
  const [newTodos, setTodos] = useState(todos);

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <View className="my-4">
        <Text> Enter your Todo </Text>
        <TextInput
          onChangeText={(e) => handleChange(e)}
          className="border border-purple-900 rounded-md"
        />
      </View>
    </>
  );
};

export default Form;
