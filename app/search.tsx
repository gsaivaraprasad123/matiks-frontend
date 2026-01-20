import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { searchUsers } from "../services/api";
import SearchRow from "../components/SearchRow";
import { colors } from "../constants/theme";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const id = setTimeout(async () => {
      const res = await searchUsers(query);
      setResults(res);
    }, 300);

    return () => clearTimeout(id);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search username..."
        placeholderTextColor={colors.muted}
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <FlatList
        data={results}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <SearchRow item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 12,
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
    elevation: 2,
  },
});
