import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./Header";
import { useState } from "react";
import Form from "./Form";

export default function List() {
  const handlePress = (index) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.index != index);
    });
  };
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
    <View style={styles.container}>
      <Header />
      <Form todos={todos} />
      <ScrollView>
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 40,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
