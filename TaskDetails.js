import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function TaskDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Details</Text>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Task:</Text>
        <Text style={styles.value}>{task.title}</Text>
      </View>

      {task.description ? (
        <View style={styles.detailBox}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{task.description}</Text>
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back to Task List</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  detailBox: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#000",
  },
  backButton: {
    marginTop: 40,
    alignItems: "center",
  },
  backText: {
    color: "#1e90ff",
    fontSize: 16,
  },
});
