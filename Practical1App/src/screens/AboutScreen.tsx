import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function AboutScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>About Me</Text>
        <Text style={styles.headerSubtitle}>Get to know Sonam</Text>
      </View>

      {/* Education Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎓 Education</Text>
        <Text style={styles.cardText}>
          Currently pursuing Bachelor's degree in Software Engineering at CST
        </Text>
      </View>

      {/* Interests Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>❤️ Interests</Text>
        <Text style={styles.cardText}>
          • Mobile App Development
          {'\n'}• Web Development
          {'\n'}• UI/UX Design
        </Text>
      </View>

      {/* Back Button */}
      <View style={styles.buttonSection}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f7',
  },
  headerSection: {
    backgroundColor: '#e91e63',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});