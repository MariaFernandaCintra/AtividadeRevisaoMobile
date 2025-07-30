import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header"; // Reaproveitando o header lilás
import CardUser from "../components/CardUser"; // Card que mostra os dados do usuário

const Users = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Usuários</Text>
        <CardUser />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E8FF", // Fundo lilás claro
  },
  content: {
    marginTop: 120, // Compensa o header fixo
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7B2CBF", // Roxo
    marginBottom: 20,
  },
});

export default Users;
