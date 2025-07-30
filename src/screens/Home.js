import React from "react";
import Header from "../components/Header"; 
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Header/>
      <Text style={styles.title}>Atividade Revisão</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Posts")}>
        <Text style={styles.buttonText}>Ver Posts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Users")}>
        <Text style={styles.buttonText}>Ver Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tarefas")}>
        <Text style={styles.buttonText}>Ver Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E8FF", // Lilás claro de fundo
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7B2CBF", // Roxo/lilás escuro
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#B388EB", // Lilás
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default HomeScreen;
