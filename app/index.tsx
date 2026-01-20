import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { fetchLeaderboard } from "../services/api";
import LeaderboardRow from "../components/LeaderboardRow";
import { colors } from "../constants/theme";

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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Global Leaderboard</Text>
        <Pressable style={styles.searchBtn} onPress={() => router.push("/search")}>
          <Text style={styles.searchText}>Search User</Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <LeaderboardRow item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 12,
  },
  header: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  searchBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  searchText: {
    color: "#fff",
    fontWeight: "600",
  },
});
