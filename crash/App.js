import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  const [count, setCount] = useState(0);
  const handleSub = () => {
    setCount(count - 1);
  };
  const handleAdding = () => {
    setCount(count + 1);
  };
  const handleChange = (e) => {
    setCount(parseInt(e));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="pt-12 justify-center items-center">
        <Text className="text-blue-800">
          Enter how many apps you want to make :
        </Text>
        <TextInput
          onChangeText={(e) => handleChange(e)}
          className="border rounded border-blue-800 w-9/12 px-7 mt-2"
        />
        <View className="flex flex-row w-full justify-evenly px-10 my-2">
          <View className="flex flex-row items-center">
            <Button
              onPress={() => handleSub()}
              title="Did One"
              className="mt-2 bg-blue-800"
            />
            <AntDesign name="pluscircleo" size={18} color="black" />
          </View>
          <View className="flex flex-row items-center">
            <Button
              onPress={() => handleAdding()}
              title="Add One"
              className="mt-2"
            />
            <AntDesign name="minuscircleo" size={18} color="black" />
          </View>
        </View>
        <Text>Youve made {count} </Text>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}
