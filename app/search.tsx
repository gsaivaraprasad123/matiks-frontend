import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { searchUsers } from "../services/api";
import SearchRow from "../components/SearchRow";

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
    }, 300); // debounce

    return () => clearTimeout(id);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search username..."
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
  container: { flex: 1, padding: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});
