import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SZ</Text>
        </View>
        <Text style={styles.name}>Sonam Zangmo</Text>
        <Text style={styles.tagline}>2nd Year Software Engineering Student</Text>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.bioText}>
          Passionate about learn about mobile applications.
        </Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttonSection}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>Learn More About Me →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f7',
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#e91e63',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  bioSection: {
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 10,
  },
  bioText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
  },
  skillsSection: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#e91e63',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonSection: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});