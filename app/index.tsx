import { View, FlatList, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { fetchLeaderboard } from "../services/api";
import LeaderboardRow from "../components/LeaderboardRow";

export default function LeaderboardScreen() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const load = async () => {
    const res = await fetchLeaderboard(50);
    setData(res);
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Search User" onPress={() => router.push("/search")} />

      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <LeaderboardRow item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
