import { View, Text, StyleSheet } from "react-native";

export default function LeaderboardRow({ item }: any) {
  return (
    <View style={styles.row}>
      <Text style={styles.rank}>{item.rank}</Text>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.rating}>{item.rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  rank: { width: 60, fontWeight: "bold" },
  username: { flex: 1 },
  rating: { width: 80, textAlign: "right" },
});
