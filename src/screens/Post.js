import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import CardPost from "../components/CardPost";
import { getPosts, getUsers } from "../services/api";
import Header from "../components/Header";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsRes, usersRes] = await Promise.all([
          getPosts(),
          getUsers(),
        ]);

        const usersMap = usersRes.reduce((userMap, user) => {
          userMap[user.id] = user.name;
          return userMap;
        }, {});

        const postsWithUserName = postsRes.map((post) => ({
          ...post,
          userName: usersMap[post.userId] || "Desconhecido",
        }));

        setPosts(postsWithUserName);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#A64AC9" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Informações</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {posts.map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            body={post.body}
            userName={post.userName}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E6FF", // Lilás muito claro
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6E6FF",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7B2CBF", // Roxo escuro
    marginTop: 100,
    marginBottom: 15,
    textAlign: "center",
  },
  scroll: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
