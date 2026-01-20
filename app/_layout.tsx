import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Leaderboard" }} />
      <Stack.Screen name="search" options={{ title: "User Search" }} />
    </Stack>
  );
}
