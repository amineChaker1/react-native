import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handlePress = () => {
    setCounter(counter + 1);
  };
  const handlePress2 = () => {
    setCounter(counter - 1);
  };
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text>Enter how many apps :</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(e) => setCounter(e)}
          className="border border-blue-700 m-3 text-center"
          placeholder="e.g. 5"
        />
      </View>
      <Text className="text-green-900">
        {" "}
        Hi this is the app number {counter}{" "}
      </Text>
      <View className="mt-3">
        <Button onPress={handlePress} title="+1" />
        <Button onPress={handlePress2} title="-1" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
