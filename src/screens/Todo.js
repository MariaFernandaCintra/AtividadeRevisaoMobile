import { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import CardTodo from "../components/CardTodo";
import { getTodos, getUsers } from "../services/api";
// import { Header } from "@react-navigation/stack";
import Header from "../components/Header";

export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const [todosData, usersData] = await Promise.all([
          getTodos(),
          getUsers(),
        ]);

        const usersMap = usersData.reduce((map, user) => {
          map[user.id] = user.name;
          return map;
        }, {});

        const todosWithUserName = todosData.map((todo) => ({
          ...todo,
          userName: usersMap[todo.userId] || "Desconhecido",
        }));

        setTodos(todosWithUserName);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar ToDos:", error);
      }
    }

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#D9007B" style={{ flex: 1 }} />
    );
  }

  return (
    <View style={styles.container}>
        <Header />
        <Text style={styles.titleP}>Tarefas</Text>
    <ScrollView style={styles.body}>
      {todos.map((todo) => (
        <CardTodo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          userName={todo.userName}
        />
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6E6FF",
  },
  titleP:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#7B2CBF",
    marginBottom: 20,
    marginLeft: "180",
    marginTop:100
  },
});