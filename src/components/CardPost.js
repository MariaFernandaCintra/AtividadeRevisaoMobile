import { View, Text, StyleSheet } from 'react-native';


export default function CardPost({ title, body, userName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.user}>Autor: {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EAD6FF', // Lilás claro
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B2CBF', // Roxo escuro
  },
  body: {
    marginTop: 6,
    fontSize: 14,
    color: '#4A4A4A',
    lineHeight: 20,
  },
  user: {
    marginTop: 12,
    fontSize: 13,
    fontStyle: 'italic',
    color: '#6A0DAD',
  },
});
