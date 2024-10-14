import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const AuthScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Sign in Screen</Text>
      <Button title="to home" onPress={() => router.push("/(tabs)/home")} />
    </View>
  );
};

export default AuthScreen;
