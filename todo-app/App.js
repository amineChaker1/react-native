import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const people = [
    { name: "Mark", index: 1 },
    { name: "Mark", index: 2 },
    { name: "Mark", index: 3 },
    { name: "Mark", index: 4 },
    { name: "Mark", index: 5 },
    { name: "Mark", index: 6 },
    { name: "Mark", index: 7 },
    { name: "Mark", index: 8 },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => (
          <Text
            key={person.index}
            className=" border border-slate-900 text-slate-900 mt-6 p-8 text-lg font-bold rounded-lg"
          >
            {person.name}
          </Text>
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
