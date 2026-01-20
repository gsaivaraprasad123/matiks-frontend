import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export default function SearchRow({ item }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.rank}>#{item.rank}</Text>
      <View style={{ flex: 1 }}>
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
    elevation: 2,
  },
  rank: {
    width: 60,
    fontWeight: "700",
    color: colors.primary,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
  },
  rating: {
    fontSize: 13,
    color: colors.muted,
  },
});
