const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL 

export async function fetchLeaderboard(limit = 50) {
  const res = await fetch(`${BASE_URL}/leaderboard?limit=${limit}`);
  return res.json();
}

export async function searchUsers(query: string) {
  const res = await fetch(`${BASE_URL}/search?query=${query}`);
  return res.json();
}
