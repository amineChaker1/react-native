import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-green-900"> Hi this is my first app </Text>

      <StatusBar style="auto" />
    </View>
  );
}
