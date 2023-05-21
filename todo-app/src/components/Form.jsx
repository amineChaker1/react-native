import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
const Form = ({ todos, setTodos }) => {
  const [inputData, setInputData] = useState("");
  const handleNewTodo = () => {
    setTodos([{ name: inputData, index: Math.random() }, ...todos]);
    console.log(todos);
  };

  const handleChange = (e) => {
    setInputData(e);
  };
  return (
    <>
      <View className="my-4">
        <Text> Enter your Todo </Text>
        <TextInput
          onChangeText={(e) => handleChange(e)}
          className="border border-purple-900 rounded-md mb-3 p-2"
        />
        <Button
          onPress={() => handleNewTodo()}
          title="Add Todo"
          color="purple"
        />
      </View>
    </>
  );
};

export default Form;
