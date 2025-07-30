import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

export default function CardTodo({ title, completed, userName }) {
  const [isChecked, setChecked] = useState(completed);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#A64AC9" : undefined}
        />
        <Text style={styles.statusText}>
          {isChecked ? "Concluído" : "Pendente"}
        </Text>
      </View>

      <Text style={styles.user}>Usuário: {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F6E6FF", // Lilás claro
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#7B2CBF", // Roxo escuro
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  statusText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#5A189A", // Roxo médio
  },
  user: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#6C757D", // Cinza suave
  },
});
