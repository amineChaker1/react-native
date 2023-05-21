import React from "react";

import { Text, View } from "react-native";
const Header = () => {
  return (
    <>
      <View className=" border-b border-purple-900 p-2">
        <Text className="text-center font-bold text-lg">
          To<Text className="text-purple-900 ">Do</Text> App
        </Text>
      </View>
    </>
  );
};

export default Header;
