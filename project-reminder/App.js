import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Home from "./src/screens/home";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "Learn React", index: 1 },
    { name: "Advanced Js", index: 2 },
    { name: "A Meta Framework", index: 3 },
    { name: "Full Stack", index: 4 },
    { name: "Mongo", index: 5 },
    { name: "Express", index: 6 },
    { name: "Prisma", index: 7 },
    { name: "Ts", index: 8 },
  ]);
  return (
    <>
      <View className="flex items-center mt-5 bg-white px-5">
        <TextInput className="border border-blue-800 w-full rounded-lg" />

        <Text className="text-blue-700 font-bold">
          Open up App.js to start working on your app
        </Text>
      </View>
      <ScrollView className="px-5">
        {todos.map((todo) => (
          <TouchableOpacity
            onPress={() => handlePress(todo.index)}
            key={todo.index}
          >
            <Text
              key={todo.index}
              className=" border border-purple-900 text-slate-900 mt-6 p-8 text-lg font-bold rounded-lg"
            >
              {todo.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
