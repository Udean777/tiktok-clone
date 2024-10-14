import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-red-500">
          This screen doesn't exist.
        </Text>
        <Link href="/">
          <Text className="text-blue-500 font-bold text-xl">
            Go to home screen mate!
          </Text>
        </Link>
      </View>
    </>
  );
}
