import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export default function LeaderboardRow({ item }: any) {
  const badgeColor =
    item.rank === 1
      ? colors.gold
      : item.rank === 2
      ? colors.silver
      : item.rank === 3
      ? colors.bronze
      : colors.primary;

  return (
    <View style={styles.card}>
      <View style={[styles.rankBadge, { backgroundColor: badgeColor }]}>
        <Text style={styles.rankText}>#{item.rank}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.rating}>{item.rating} rating</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  rankBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rankText: {
    color: "#fff",
    fontWeight: "700",
  },
  info: { flex: 1 },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  rating: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },
});
